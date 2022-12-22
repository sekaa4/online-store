import { createElement } from '../elements/generateElement';

export default function createState(elem: HTMLDivElement): HTMLDivElement {
  const stateTitle: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['title', 'state__title'],
    text: 'Found: ',
  });

  const stateDescription: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['value', 'state__value'],
    text: '0',
  });

  elem.append(stateTitle, stateDescription);

  return elem;
}
