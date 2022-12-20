import { createElement } from './generateElement';
import { ConstantsDom } from '../../models/enumDom';

export function renderFooter() {
  const footer: HTMLElement = createElement(ConstantsDom.FOOTER, document.body, [ConstantsDom.FOOTER]);
  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, footer, [ConstantsDom.WRAPPER, ConstantsDom.FOOTER_WRAPPER]);
  createElement(ConstantsDom.DIV, wrapper, [ConstantsDom.FOOTER_LOGO_CONTAINER]);
  const nav: HTMLElement = createElement(ConstantsDom.DIV, wrapper, [ConstantsDom.FOOTER_NAV, ConstantsDom.LAYOUT_3]);
  const colum: HTMLElement = createElement(ConstantsDom.DIV, nav, [ConstantsDom.FOOTER_COLUM]);
  const links: HTMLElement = createElement(ConstantsDom.DIV, colum, [ConstantsDom.FOOTER_LINKS]);
  createElement(ConstantsDom.A, links, [ConstantsDom.DEFAULT], ConstantsDom.GITHUB, [[ConstantsDom.HREF, ConstantsDom.OCTOPR]]);
  const colum_one: HTMLElement = createElement(ConstantsDom.DIV, nav, [ConstantsDom.FOOTER_COLUM]);
  const links_one: HTMLElement = createElement(ConstantsDom.DIV, colum_one, [ConstantsDom.FOOTER_LINKS]);
  createElement(ConstantsDom.A, links_one, [ConstantsDom.DEFAULT], ConstantsDom.GITHUB, [[ConstantsDom.HREF, ConstantsDom.OCTOPR]]);
  const colum_two: HTMLElement = createElement(ConstantsDom.DIV, nav, [ConstantsDom.FOOTER_COLUM]);
  const links_two: HTMLElement = createElement(ConstantsDom.DIV, colum_two, [ConstantsDom.FOOTER_LINKS]);
  createElement(ConstantsDom.A, links_two, [ConstantsDom.DEFAULT], ConstantsDom.PRODUCT, [[ConstantsDom.HREF, ConstantsDom.OCTOPR]]);
}
