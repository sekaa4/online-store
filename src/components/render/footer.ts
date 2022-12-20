import { createElement } from './generateElement';
import { Constants } from '../../models/constants';

export function renderFooter() {
  const footer: HTMLElement = createElement(Constants.FOOTER, document.body, [Constants.FOOTER]);
  const wrapper: HTMLElement = createElement(Constants.DIV, footer, [Constants.WRAPPER, Constants.FOOTER_WRAPPER]);
  createElement(Constants.DIV, wrapper, [Constants.FOOTER_LOGO_CONTAINER]);
  const nav: HTMLElement = createElement(Constants.DIV, wrapper, [Constants.FOOTER_NAV, Constants.LAYOUT_3]);
  const colum: HTMLElement = createElement(Constants.DIV, nav, [Constants.FOOTER_COLUM]);
  const links: HTMLElement = createElement(Constants.DIV, colum, [Constants.FOOTER_LINKS]);
  createElement(Constants.A, links, [Constants.DEFAULT], Constants.GITHUB, [[Constants.HREF, Constants.OCTOPR]]);
  const colum_one: HTMLElement = createElement(Constants.DIV, nav, [Constants.FOOTER_COLUM]);
  const links_one: HTMLElement = createElement(Constants.DIV, colum_one, [Constants.FOOTER_LINKS]);
  createElement(Constants.A, links_one, [Constants.DEFAULT], Constants.GITHUB, [[Constants.HREF, Constants.OCTOPR]]);
  const colum_two: HTMLElement = createElement(Constants.DIV, nav, [Constants.FOOTER_COLUM]);
  const links_two: HTMLElement = createElement(Constants.DIV, colum_two, [Constants.FOOTER_LINKS]);
  createElement(Constants.A, links_two, [Constants.DEFAULT], Constants.PRODUCT, [[Constants.HREF, Constants.OCTOPR]]);
}
