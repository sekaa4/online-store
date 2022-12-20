import { createElement } from './generateElement';
import logo from '../../assets/logo/logo.png';
import { Constants } from '../../models/constants';

export function renderHeader(): void {
  const header: HTMLElement = createElement(Constants.HEADER, document.body, [Constants.HEADER]);
  const wrapper: HTMLElement = createElement(Constants.DIV, header, [Constants.WRAPPER, Constants.HEADER_WRAPPER]);
  const logoContainer: HTMLElement = createElement(Constants.DIV, wrapper, [Constants.LOGO_CONTAINER]);
  createElement(Constants.IMG, logoContainer, [Constants.LOGO_IMG], Constants.EMPTY, [
    [Constants.ALT, Constants.LOGO],
    [Constants.SRC, logo],
  ]);
  const shopBasketContainer: HTMLElement = createElement(Constants.DIV, wrapper, [Constants.BASKET_CONTAINER]);
  const number = 0;
  createElement(Constants.P, shopBasketContainer, [Constants.BASKET_COUNTER], number.toString());
}
