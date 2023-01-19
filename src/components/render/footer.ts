import { createElement } from '../elements/generateElement';
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

  const footerCopy: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.FOOTER_COPY],
  });

  createElement(ConstantsDom.SPAN, HTMLElement, {
    parentElement: footerCopy,
    classes: [ConstantsDom.FOOTER_SPAN_COPY],
    text: '2023 © All rights reserved',
  });

  createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.FOOTER_LOGO_CONTAINER],
    attributes: [['onClick', `window.location='${ConstantsDom.RSSCHOOL}'`]],
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
    classes: [ConstantsDom.TEXT_NAME],
    text: 'Sergey Pansevich',
    attributes: [[ConstantsDom.HREF, ConstantsDom.GITHUB_SERGEY]],
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
    classes: [ConstantsDom.TEXT_NAME],
    text: 'Ilya Navumenka',
    attributes: [[ConstantsDom.HREF, ConstantsDom.GITHUB_ILYA]],
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
    classes: [ConstantsDom.TEXT_NAME],
    text: ConstantsDom.NAME_RSSCHOOL,
    attributes: [[ConstantsDom.HREF, ConstantsDom.RSSCHOOL]],
  });
}
