import { createElement } from './generateElement';
import { Constants } from '../../models/constants';

export function renderMain(): void {
  const main: HTMLElement = createElement(Constants.MAIN, document.body, [Constants.MAIN]);
  const wrapper: HTMLElement = createElement(Constants.DIV, main, [Constants.WRAPPER, Constants.MAIN_WRAPPER]);
  createElement(Constants.DIV, wrapper, [Constants.FILTER_CONTAINER]);
  createElement(Constants.DIV, wrapper, [Constants.ITEMS_CONTAINER]);
}
