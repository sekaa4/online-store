import { createElement } from './generateElement';
import {
  DIV,
  WRAPPER,
  FOOTER,
  FOOTER_WRAPPER,
  FOOTER_LOGO_CONTAINER,
  FOOTER_NAV,
  FOOTER_COLUM,
  FOOTER_LINKS,
  LAYOUT_3,
  A,
  HREF,
  OCTOPR,
  GITHUB,
  PRODUCT,
  DEFAULT,
} from '../../models/constants';

export function renderFooter() {
  const footer: HTMLElement = createElement(FOOTER, document.body, [FOOTER]);
  const wrapper: HTMLElement = createElement(DIV, footer, [WRAPPER, FOOTER_WRAPPER]);
  createElement(DIV, wrapper, [FOOTER_LOGO_CONTAINER]);
  const nav: HTMLElement = createElement(DIV, wrapper, [FOOTER_NAV, LAYOUT_3]);
  const colum: HTMLElement = createElement(DIV, nav, [FOOTER_COLUM]);
  const links: HTMLElement = createElement(DIV, colum, [FOOTER_LINKS]);
  createElement(A, links, [DEFAULT], GITHUB, [[HREF, OCTOPR]]);
  const colum_one: HTMLElement = createElement(DIV, nav, [FOOTER_COLUM]);
  const links_one: HTMLElement = createElement(DIV, colum_one, [FOOTER_LINKS]);
  createElement(A, links_one, [DEFAULT], GITHUB, [[HREF, OCTOPR]]);
  const colum_two: HTMLElement = createElement(DIV, nav, [FOOTER_COLUM]);
  const links_two: HTMLElement = createElement(DIV, colum_two, [FOOTER_LINKS]);
  createElement(A, links_two, [DEFAULT], PRODUCT, [[HREF, OCTOPR]]);
}
