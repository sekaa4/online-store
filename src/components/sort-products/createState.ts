import { createElement } from '../elements/generateElement';
import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';

export default function createState(elem: HTMLDivElement): HTMLDivElement {
  const persistentStorage = new LocalStorage();
  const data: DataProducts[] = persistentStorage.getItem('data');
  const stateTitle: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['title', 'state__title'],
    text: 'Found: ',
  });

  const stateDescription: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['value', 'state__value'],
    text: data.length.toString(),
  });

  elem.append(stateTitle, stateDescription);

  return elem;
}
