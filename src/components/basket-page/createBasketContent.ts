//import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import CreateElement from '../elements/CreateElement';
import { LocalStorage } from '../../utils/persistentStorage';
import createDescription from '../../utils/createDescription';
import { createCartListItems } from './createCartListItems';
import { createSummary } from './createSummary';
import { ItemBasket } from '../../interfaces/ItemToBasket';

export default function createBasketContent(): HTMLElement {
  const local = new LocalStorage();
  const basketData: ItemBasket[] = local.getItem('basketItem');
  const data: DataProducts[] = local.getItem('data');
  let currentData: DataProducts[] = [];

  if (basketData) {
    currentData = basketData.reduce((acc: DataProducts[], itemBasket: ItemBasket) => {
      data.forEach((dataProduct: DataProducts) => {
        dataProduct.id === itemBasket.id ? acc.push(dataProduct) : false;
      });
      return acc;
    }, []);
  }

  const basketContent: CreateElement = new CreateElement('div', {
    classes: ['cart-page__content', 'cart-content'],
  });

  if (currentData.length === 0 || !basketData) {
    const description = 'Cart is empty';
    const elemEmpty: HTMLHeadElement = createDescription(HTMLHeadElement, {
      classes: ['cart-content__empty', 'description__empty'],
      text: description,
    });
    basketContent.elem.append(elemEmpty);
    return basketContent.elem;
  }

  const cartListElem = createCartListItems(currentData, basketContent.elem);
  const summaryElem = createSummary(currentData);

  basketContent.elem.append(cartListElem, summaryElem);
  return basketContent.elem;
}
