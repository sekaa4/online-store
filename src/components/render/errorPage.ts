import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import CreateElement from '../elements/CreateElement';

export function errorPage(): CreateElement {
  const divError: CreateElement = new CreateElement(ConstantsDom.DIV, {
    classes: [ConstantsDom.ERROR_DIV],
  });
  const numberError: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: divError.elem,
    classes: [ConstantsDom.ERROR_NUMBER],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: numberError,
    classes: [ConstantsDom.ERROR_NUMBER_PARAGRAPH],
    text: '404',
  });
  const titleError: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: divError.elem,
    classes: [ConstantsDom.ERROR_TITLE],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: titleError,
    classes: [ConstantsDom.ERROR_TITLE_PARAGRAPH],
    text: 'Sorry, the page you requested was not found.',
  });
  const descriptionError: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: divError.elem,
    classes: [ConstantsDom.ERROR_DESCRIPTION],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: descriptionError,
    classes: [ConstantsDom.ERROR_DESCRIPTION_PARAGRAPH],
    text: 'The address is typed incorrectly or the page no longer exists on the site.',
  });
  const buttonError: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: divError.elem,
    classes: [ConstantsDom.ERROR_BUTTON],
  });
  createElement(ConstantsDom.BUTTON, HTMLElement, {
    parentElement: buttonError,
    classes: [ConstantsDom.ERROR_BUTTON_CLICK, ConstantsDom.ERROR_BUTTON_BORDERED],
    text: 'GO TO MAIN PAGE',
  });
  document.body.append(divError.elem);
  return divError;
}
