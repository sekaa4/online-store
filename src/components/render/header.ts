import { createElement } from '../elements/generateElement';
import logo from '../../assets/logo/logo.png';
import { ConstantsDom } from '../../models/Dom';
import { renderBasket } from './renderBasket';
import history from '../../utils/history';
import { ItemBasket } from '../../interfaces/ItemToBasket';

export let count: HTMLElement;
export let numberBasket: HTMLElement;

export function renderHeader(): void {
  const header: HTMLElement = createElement(ConstantsDom.HEADER, HTMLElement, {
    classes: [ConstantsDom.HEADER],
  });

  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: header,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.HEADER_WRAPPER],
  });

  const logoContainer: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.LOGO_CONTAINER],
  });

  createElement(ConstantsDom.IMG, HTMLElement, {
    parentElement: logoContainer,
    classes: [ConstantsDom.LOGO_IMG],
    text: ConstantsDom.EMPTY,
    attributes: [
      [ConstantsDom.ALT, ConstantsDom.LOGO],
      [ConstantsDom.SRC, logo],
    ],
  });

  const priceAll: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.PRICE_DIV],
  });
  createElement(ConstantsDom.SPAN, HTMLElement, {
    parentElement: priceAll,
    classes: [ConstantsDom.PRICE_SPAN],
    text: `Cart total: `,
  });
  const priceSpanCount: HTMLElement = createElement(ConstantsDom.SPAN, HTMLElement, {
    parentElement: priceAll,
    classes: [ConstantsDom.PRICE_SPAN_COUNT],
    text: `0`,
  });
  count = priceSpanCount;

  createElement(ConstantsDom.SPAN, HTMLElement, {
    parentElement: priceAll,
    classes: [ConstantsDom.PRICE_SPAN_CURRENCY],
    text: `$`,
  });

  const shopBasketContainer: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.BASKET_CONTAINER],
  });

  const numberBasketCount: HTMLElement = createElement(ConstantsDom.P, HTMLElement, {
    parentElement: shopBasketContainer,
    classes: [ConstantsDom.BASKET_COUNTER],
    text: `0`,
  });
  numberBasket = numberBasketCount;

  shopBasketContainer.onclick = () => {
    window.history.state.id += 1;
    const path = `/cart`;
    window.history.pushState({ id: window.history.state.id, path: path }, '', path);
    renderBasket();
  };

  logoContainer.onclick = () => {
    if (window.history.state && window.history.state.path === '/') {
      window.history.replaceState({ id: window.history.state.id, path: '/' }, '', '/');
      return;
    }
    window.history.state.id += 1;
    const path = '/';
    window.history.pushState({ id: window.history.state.id, path: path }, '', path);
    history();
  };

  if (localStorage.getItem('basketItem')) {
    const basketItemString: string = <string>localStorage.getItem('basketItem');
    const basketItems: ItemBasket[] = JSON.parse(basketItemString);
    let sumPrice = 0;
    let sumCount = 0;

    basketItems.forEach((basketItem: ItemBasket) => {
      sumPrice += basketItem.price * basketItem.count;
      sumCount += basketItem.count;
    });

    count.innerText = sumPrice.toString();
    numberBasket.innerText = sumCount.toString();
  }

  document.body.append(header);
}
