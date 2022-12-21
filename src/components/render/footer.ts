import { createElement } from './generateElement';
import { ConstantsDom } from '../../models/Dom';

export function renderFooter() {
  const footer: HTMLElement = createElement(ConstantsDom.FOOTER, HTMLElement, {
    parentElement: document.body,
    classes: [ConstantsDom.FOOTER],
  });
  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: footer,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.FOOTER_WRAPPER],
  });

  createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.FOOTER_LOGO_CONTAINER],
  });

  const nav: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.FOOTER_NAV, ConstantsDom.LAYOUT_3],
  });

  const colum: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: nav,
    classes: [ConstantsDom.FOOTER_COLUM],
  });

  const links: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: colum,
    classes: [ConstantsDom.FOOTER_LINKS],
  });

  createElement(ConstantsDom.A, HTMLElement, {
    parentElement: links,
    classes: [ConstantsDom.DEFAULT],
    text: ConstantsDom.GITHUB,
    attributes: [[ConstantsDom.HREF, ConstantsDom.OCTOPR]],
  });

  const colum_one: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: nav,
    classes: [ConstantsDom.FOOTER_COLUM],
  });

  const links_one: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: colum_one,
    classes: [ConstantsDom.FOOTER_LINKS],
  });

  createElement(ConstantsDom.A, HTMLElement, {
    parentElement: links_one,
    classes: [ConstantsDom.DEFAULT],
    text: ConstantsDom.GITHUB,
    attributes: [[ConstantsDom.HREF, ConstantsDom.OCTOPR]],
  });

  const colum_two: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: nav,
    classes: [ConstantsDom.FOOTER_COLUM],
  });

  const links_two: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: colum_two,
    classes: [ConstantsDom.FOOTER_LINKS],
  });

  createElement(ConstantsDom.A, HTMLElement, {
    parentElement: links_two,
    classes: [ConstantsDom.DEFAULT],
    text: ConstantsDom.PRODUCT,
    attributes: [[ConstantsDom.HREF, ConstantsDom.OCTOPR]],
  });
}
