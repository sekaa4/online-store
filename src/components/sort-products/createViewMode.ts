import { createElement } from '../elements/generateElement';

export default function createViewMode(elem: HTMLDivElement): HTMLDivElement {
  const list: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['view-mode__list'],
  });

  const table: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['view-mode__table', 'view-mode_active'],
  });

  elem.append(list, table);

  return elem;
}
