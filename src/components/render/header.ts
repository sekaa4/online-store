import { createElement } from './generateElement';
import logo from '../../assets/logo/logo.png';
import { ConstantsDom } from '../../models/Dom';

export function renderHeader(): void {
  const header: HTMLElement = createElement(ConstantsDom.HEADER, HTMLElement, {
    parentElement: document.body,
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
}
