import { createElement } from './generateElement';
import { ConstantsDom } from '../../models/enumDom';
import CreateElement from './CreateElement';
import { createAside } from './createAside';

export function renderMain(): void {
  const main: CreateElement = new CreateElement(ConstantsDom.MAIN, {
    classes: [ConstantsDom.MAIN],
  });

  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: main.elem,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });

  const filterContainer: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.FILTER_CONTAINER],
  });

  createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.ITEMS_CONTAINER],
  });

  //TODO: return instanse of CreateElement mb you'll need a copy in the future.
  const divAside: CreateElement = createAside();
  filterContainer.append(divAside.elem);

  document.body.append(main.elem);
}
