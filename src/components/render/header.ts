import { createElement } from './generateElement';
import logo from '../../assets/logo/logo.png';
import { ConstantsDom } from '../../models/enumDom';

export function renderHeader(): void {
  const header: HTMLElement = createElement(ConstantsDom.HEADER, document.body, [ConstantsDom.HEADER]);
  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, header, [ConstantsDom.WRAPPER, ConstantsDom.HEADER_WRAPPER]);
  const logoContainer: HTMLElement = createElement(ConstantsDom.DIV, wrapper, [ConstantsDom.LOGO_CONTAINER]);
  createElement(ConstantsDom.IMG, logoContainer, [ConstantsDom.LOGO_IMG], ConstantsDom.EMPTY, [
    [ConstantsDom.ALT, ConstantsDom.LOGO],
    [ConstantsDom.SRC, logo],
  ]);
  const shopBasketContainer: HTMLElement = createElement(ConstantsDom.DIV, wrapper, [ConstantsDom.BASKET_CONTAINER]);
  const number = 0;
  createElement(ConstantsDom.P, shopBasketContainer, [ConstantsDom.BASKET_COUNTER], number.toString());
}
