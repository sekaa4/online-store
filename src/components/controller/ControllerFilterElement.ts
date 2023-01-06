import stateHandler from './stateHandler';
import checkSearchParams from '../../utils/checkSearchParams';
import { ControllerFilterElements } from '../../interfaces/ControllerFilterElements';
import { ConstantsDom } from '../../models/Dom';

export default class ControllerFilterElement implements ControllerFilterElements {
  constructor(private elem: HTMLElement, public classes?: string[]) {
    this.elem = elem;
    this.classes = classes || [];
  }

  start() {
    this.elem.addEventListener('click', (e: MouseEvent): void => {
      const target: HTMLElement = <HTMLElement>e.target;

      if (target.closest('.aside__button')) {
        if (target.innerHTML === 'Reset Filters') {
          localStorage.removeItem(ConstantsDom.DATA_CURRENT);
          this.filterItems('reset', '/');
        }
      }
    });

    this.elem.addEventListener('input', (e): void => {
      const target: HTMLInputElement = <HTMLInputElement>e.target;
      const parent: HTMLDivElement = <HTMLDivElement>target.parentElement;

      if (target.closest('.category__list') || target.closest('.brand__list')) {
        const checkboxLine: NodeListOf<HTMLElement> = this.elem.querySelectorAll('.checkbox__line');
        const inputCheckboxActive: HTMLElement | undefined = this.searchCheckbox(checkboxLine);

        if (target.closest('.category__list')) {
          const labelCheckbox: string = <string>target.id;
          this.filterItems('category', labelCheckbox);
        } else if (target.closest('.brand__list')) {
          const labelCheckbox: string = <string>target.id;
          this.filterItems('brand', labelCheckbox);
        }

        if (checkboxLine.length > 0 && inputCheckboxActive) {
          checkboxLine.forEach((item) => {
            const input: HTMLInputElement = <HTMLInputElement>item.querySelector('.input__checkbox');
            const span: HTMLSpanElement = <HTMLSpanElement>item.querySelector('.span__checkbox');
            if (input.checked) {
              item.classList.add('item__active');
              item.classList.remove('item__active_not');
              span.innerHTML = `(${span.dataset.count}/${span.dataset.count})`;
            } else {
              item.classList.remove('item__active');
              item.classList.add('item__active_not');
              span.innerHTML = `(0/${span.dataset.count})`;
            }
          });
        } else {
          checkboxLine.forEach((item) => {
            const span: HTMLSpanElement = <HTMLSpanElement>item.querySelector('.span__checkbox');
            item.classList.remove('item__active_not');
            item.classList.add('item__active');
            span.innerHTML = `(${span.dataset.count}/${span.dataset.count})`;
          });
        }
      }

      if (target.classList.contains('slider1') || target.classList.contains('slider2')) {
        const sliderOne: HTMLInputElement = <HTMLInputElement>parent.querySelector('.slider1');
        const sliderTwo: HTMLInputElement = <HTMLInputElement>parent.querySelector('.slider2');
        const value = `${sliderOne.value}↕${sliderTwo.value}`;

        if (target.closest('.dual-slider__price')) {
          this.filterItems('price', value);
        } else if (target.closest('.dual-slider__stock')) {
          this.filterItems('stock', value);
        }
      }
    });
  }

  searchCheckbox(items: NodeListOf<HTMLElement>) {
    const arrList = Array.from(items);
    return arrList.find((item) => {
      const input: HTMLInputElement = <HTMLInputElement>item.querySelector('.input__checkbox');
      return input.checked;
    });
  }

  filterItems(filterName: string, subName: string) {
    checkSearchParams(filterName, subName);
    stateHandler();
  }
}
