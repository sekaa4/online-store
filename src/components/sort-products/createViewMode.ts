import { createElement } from '../elements/generateElement';
import ControllerElement from '../controller/ControllerElement';

export default function createViewMode(elem: HTMLDivElement): HTMLDivElement {
  const list: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['view-mode__list'],
  });
  const controllerElem = new ControllerElement(elem);
  controllerElem.start();

  const table: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['view-mode__table', 'view-mode__active'],
  });

  elem.append(list, table);

  return elem;
}
