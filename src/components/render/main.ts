import { createElement } from './generateElement';
import { ConstantsDom } from '../../models/enumDom';

export function renderMain(): void {
  const main: HTMLElement = createElement(ConstantsDom.MAIN, HTMLElement, {
    parentElement: document.body,
    classes: [ConstantsDom.MAIN],
  });

  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: main,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });

  createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.FILTER_CONTAINER],
  });

  createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.ITEMS_CONTAINER],
  });
}
