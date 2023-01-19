import { createElement } from '../elements/generateElement';

export let stateElem: HTMLSpanElement;

export function createState(elem: HTMLDivElement): HTMLDivElement {
  const stateTitle: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['title', 'state__title'],
    text: 'Found: ',
  });

  const stateDescription: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['value', 'state__value'],
    text: '0',
  });
  stateElem = stateDescription;

  elem.append(stateTitle, stateDescription);

  return elem;
}
