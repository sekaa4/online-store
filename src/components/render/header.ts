import { createElement } from '../elements/generateElement';
import logo from '../../assets/logo/logo.png';
import { ConstantsDom } from '../../models/Dom';
import { renderBasket } from './renderBasket';
import history from '../../utils/history';

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

  const shopBasketContainer: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.BASKET_CONTAINER],
  });

  const number = 0;

  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: shopBasketContainer,
    classes: [ConstantsDom.BASKET_COUNTER],
    text: number.toString(),
  });

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

  document.body.append(header);
}
