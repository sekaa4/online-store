import stateHandler from './stateHandler';
import checkSearchParams from '../../utils/checkSearchParams';
import { ControllerSearchElements } from '../../interfaces/ControllerSearchElements';
import { imageSearch } from '../sort-products/createSearchBar';

export default class ControllerSearchElement implements ControllerSearchElements {
  constructor(private elem: HTMLDivElement, public classes?: string[]) {
    this.elem = elem;
    this.classes = classes || [];
  }

  start() {
    this.elem.addEventListener('input', (e: Event): void => {
      const target: HTMLInputElement = <HTMLInputElement>e.target;
      if (target.closest('.input-search')) {
        imageSearch.classList.add('active__image');
        imageSearch.classList.add('focus__image');
        this.searchItems('search', target.value);
      }
    });
  }

  searchItems(name: 'search', value: string) {
    checkSearchParams(name, value);
    stateHandler();
  }
}
