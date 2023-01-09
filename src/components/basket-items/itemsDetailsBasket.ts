import { DataProducts } from '../../interfaces/Data';
import { ItemBasket } from '../../interfaces/ItemToBasket';
import { count, numberBasket } from '../render/header';

export function itemsDetails(buttonActive: HTMLElement, cardActive: HTMLElement, data: DataProducts) {
  if (buttonActive.innerText === 'ADD TO CARD') {
    buttonActive.innerText = 'DROP TO CARD';

    const basketObject = { id: data.id, price: data.price, count: 1 };
    const basketArray = [basketObject];
    if (localStorage.getItem('basketItem')) {
      const basketItem = <string>localStorage.getItem('basketItem');
      const arrayA = <ItemBasket[]>JSON.parse(basketItem);
      if (!basketItem.includes(`"id":${basketObject.id}`)) {
        arrayA.push(basketObject);
      }
      localStorage.setItem('basketItem', JSON.stringify(arrayA));

      let countNumber = 0;
      arrayA.forEach(function (value) {
        countNumber = +value.price + +countNumber;
        count.innerText = <string>countNumber.toString();
      });

      arrayA.forEach(function () {
        numberBasket.innerText = arrayA.length.toString();
      });
    } else {
      numberBasket.innerText = basketArray.length.toString();
      localStorage.setItem('basketItem', JSON.stringify(basketArray));
      count.innerText = basketObject.price.toString();
    }
  } else if (buttonActive.innerText === 'DROP TO CARD') {
    buttonActive.innerText = 'ADD TO CARD';
    const basketItem = <string>localStorage.getItem('basketItem');
    const arrayA = <ItemBasket[]>JSON.parse(basketItem);

    const basketObject = { id: data.id, price: data.price, count: 1 };
    arrayA.forEach(function (value) {
      if (basketObject.id == value.id) {
        count.innerText = (+count.innerText - value.price).toString();
      }
    });

    numberBasket.innerText = (arrayA.length - 1).toString();

    arrayA.forEach((elem: ItemBasket, index: number) => {
      elem.id.toString() === cardActive.id ? arrayA.splice(index, 1) : false;
    });

    localStorage.setItem('basketItem', JSON.stringify(arrayA));
  } else if (buttonActive.innerText === 'BUY') {
    const basketObject = { id: data.id, price: data.price, count: 1 };
    const basketArray = [basketObject];
    if (localStorage.getItem('basketItem')) {
      const basketItem = <string>localStorage.getItem('basketItem');
      const arrayA = <ItemBasket[]>JSON.parse(basketItem);
      if (!basketItem.includes(`"id":${basketObject.id}`)) {
        arrayA.push(basketObject);
      }
      localStorage.setItem('basketItem', JSON.stringify(arrayA));

      let countNumber = 0;
      arrayA.forEach(function (value) {
        countNumber = +value.price + +countNumber;
        count.innerText = <string>countNumber.toString();
      });

      numberBasket.innerText = arrayA.length.toString();
    } else {
      numberBasket.innerText = basketArray.length.toString();
      localStorage.setItem('basketItem', JSON.stringify(basketArray));
      count.innerText = basketObject.price.toString();
    }
  }
}
