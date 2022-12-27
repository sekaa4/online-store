import { ControllerElements } from '../../interfaces/ControllerElements';
import stateHandler from './stateHandler';
import checkSearchParams from '../../utils/checkSearchParams';

export default class ControllerElement implements ControllerElements {
  constructor(private elem: HTMLElement, public classes?: string[]) {
    this.elem = elem;
    this.classes = classes || [];
  }

  start(): void {
    this.elem.addEventListener('click', (e: Event): void => {
      if (e.currentTarget instanceof HTMLElement) {
        if (e.target instanceof HTMLElement && e.target.classList.contains('view-mode__list')) {
          this.activeList();
        } else if (e.target instanceof HTMLElement && e.target.classList.contains('view-mode__table')) {
          this.activeTable();
        }
      }
    });
  }

  activeTable(): void {
    checkSearchParams('list', 'false');
    localStorage.removeItem('dataCurrent');
    stateHandler();
  }

  activeList(): void {
    checkSearchParams('list', 'true');
    localStorage.removeItem('dataCurrent');
    stateHandler();
  }
}
