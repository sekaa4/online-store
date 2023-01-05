import { mainElem } from './main';
import { createElement } from '../elements/generateElement';
import createBasketContent from '../basket-page/createBasketContent';
import { ConstantsDom } from '../../models/Dom';

export function renderBasket() {
  mainElem.elem.innerHTML = '';
  const cartPage: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.WRAPPER, 'cart-page', 'cart-page__wrapper'],
  });
  //stateElem.textContent = data.length.toString();

  const basketItems: HTMLElement = createBasketContent();
  cartPage.append(basketItems);
  mainElem.elem.append(cartPage);
  //return arrayDataCard;
}
