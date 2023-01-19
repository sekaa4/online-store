import { ConstantsDom } from '../../models/Dom';
import stateHandler from './stateHandler';
import checkSearchParams from '../../utils/checkSearchParams';
import { ControllerSortElements } from '../../interfaces/ControllerSortElements';
import { SortName } from '../../interfaces/SortName.type';

export default class ControllerSortElement implements ControllerSortElements {
  constructor(private elem: HTMLSelectElement, public classes?: string[]) {
    this.elem = elem;
    this.classes = classes || [];
  }

  start(): void {
    this.elem.addEventListener('click', (e: MouseEvent): void => {
      if (e instanceof PointerEvent && !(e.pointerId === 1)) {
        const optionElement = <HTMLSelectElement>e.target;
        switch (optionElement.value) {
          case ConstantsDom.PRICE_ASC:
            this.sortItems(ConstantsDom.PRICE_ASC);
            break;
          case ConstantsDom.PRICE_DESC:
            this.sortItems(ConstantsDom.PRICE_DESC);
            break;
          case ConstantsDom.RATING_ASC:
            this.sortItems(ConstantsDom.RATING_ASC);
            break;
          case ConstantsDom.RATING_DESC:
            this.sortItems(ConstantsDom.RATING_DESC);
            break;
        }
      }
    });
  }

  sortItems(sortName: SortName): void {
    checkSearchParams('sort', sortName);
    stateHandler();
  }
}
