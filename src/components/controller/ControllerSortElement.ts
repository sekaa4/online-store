import { ConstantsDom } from '../../models/Dom';
import stateHandler from './stateHandler';
import checkSearchParams from '../../utils/checkSearchParams';
import { ControllerSortElements } from '../../interfaces/ControllerSortElements';

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
            this.sortPriceASC();
            break;
          case ConstantsDom.PRICE_DESC:
            this.sortPriceDESC();
            break;
          case ConstantsDom.RATING_ASC:
            this.sortRatingASC();
            break;
          case ConstantsDom.RATING_DESC:
            this.sortRatingDESC();
            break;
        }
      }
    });
  }

  sortPriceASC(): void {
    checkSearchParams('sort', ConstantsDom.PRICE_ASC);
    stateHandler();
  }
  sortPriceDESC(): void {
    checkSearchParams('sort', ConstantsDom.PRICE_DESC);
    stateHandler();
  }
  sortRatingASC(): void {
    checkSearchParams('sort', ConstantsDom.RATING_ASC);
    stateHandler();
  }
  sortRatingDESC(): void {
    checkSearchParams('sort', ConstantsDom.RATING_DESC);
    stateHandler();
  }
}
