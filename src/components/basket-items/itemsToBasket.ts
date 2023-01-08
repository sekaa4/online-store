import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import { ItemBasket } from '../../interfaces/ItemToBasket';
import { count, numberBasket } from '../render/header';

export function itemsBasket(buttonActive: HTMLElement, cardActive: HTMLElement, data: DataProducts) {
  if (buttonActive.innerHTML === 'BUY') {
    buttonActive.innerHTML = 'DROP';
    cardActive.classList.remove(ConstantsDom.BLOCK_SHADOWED);
    cardActive.classList.add(ConstantsDom.BLOCK_SHADOWED_BASKET);

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
        count.innerHTML = countNumber.toString();
      });

      arrayA.forEach(function () {
        numberBasket.innerHTML = arrayA.length.toString();
      });
    } else {
      numberBasket.innerHTML = '1';
      localStorage.setItem('basketItem', JSON.stringify(basketArray));
      count.innerHTML = basketObject.price.toString();
    }
  } else if (buttonActive.innerHTML === 'DROP') {
    buttonActive.innerHTML = 'BUY';
    cardActive.classList.remove(ConstantsDom.BLOCK_SHADOWED_BASKET);
    cardActive.classList.add(ConstantsDom.BLOCK_SHADOWED);
    const basketItem = <string>localStorage.getItem('basketItem');
    const arrayA = <ItemBasket[]>JSON.parse(basketItem);

    const basketObject = { id: data.id, price: data.price, count: 1 };
    arrayA.forEach(function (value) {
      if (basketObject.id == value.id) {
        count.innerHTML = (+count.innerHTML - value.price).toString();
      }
    });

    arrayA.forEach(function () {
      numberBasket.innerHTML = (arrayA.length - 1).toString();
    });

    arrayA.forEach((elem: ItemBasket, index: number) => {
      elem.id.toString() === cardActive.id ? arrayA.splice(index, 1) : false;
    });

    localStorage.setItem('basketItem', JSON.stringify(arrayA));
  }
}
