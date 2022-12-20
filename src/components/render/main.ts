import { createElement } from './generateElement';
import { ConstantsDom } from '../../models/enumDom';

export function renderMain(): void {
  const main: HTMLElement = createElement(ConstantsDom.MAIN, document.body, [ConstantsDom.MAIN]);
  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, main, [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER]);
  createElement(ConstantsDom.DIV, wrapper, [ConstantsDom.FILTER_CONTAINER]);
  createElement(ConstantsDom.DIV, wrapper, [ConstantsDom.ITEMS_CONTAINER]);
}
