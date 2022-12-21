import getData from './getData';
import CreateElement from './CreateElement';
import createFilter from './filters/createFilter';
import { getAllSortData } from './filters/getAllSortData';
import createMultiSlider from './filters/createMultiSlider';
import createButtons from './filters/createButtons';
import { AllDataSort } from '../interfaces/sortData.type';
import { createElement } from './render/generateElement';

export function createAside() {
  const main: HTMLElement = document.createElement('main');
  const wrapper: HTMLDivElement = document.createElement('div');
  const divAside: CreateElement = new CreateElement('div', ['main__aside', 'aside']);

  getData().then((data) => {
    const sortObject: AllDataSort = getAllSortData(data, ['category', 'brand', 'price', 'stock']);
    const classNameDiv = [
      'aside__buttons',
      ['aside__filter', 'filter', 'filter__categories'],
      ['aside__filter', 'filter', 'filter__brands'],
      ['aside__dual-slider', 'dual-slider', 'dual-slider__price'],
      ['aside__dual-slider', 'dual-slider', 'dual-slider__stock'],
    ];

    classNameDiv.forEach((className) => {
      divAside.appendElem(new CreateElement('div'), className);
    });

    const filterCategories: Element = divAside.chooseElem('filter__categories');
    const filterBrands: Element = divAside.chooseElem('filter__brands');
    const multiSliderPrice: Element = divAside.chooseElem('dual-slider__price') as HTMLElement;
    const multiSliderStock: Element = divAside.chooseElem('dual-slider__stock');
    const filterButtons: Element = divAside.chooseElem('aside__buttons');
    const buttons: HTMLElement[] = createButtons(['Reset Filters', 'Copy Link'], 'aside');
    filterButtons.append(...buttons);

    if (sortObject.category && sortObject.brand) {
      const filterCategory: CreateElement = createFilter('Category', Array.from(sortObject.category));
      const filterBrand: CreateElement = createFilter('Brand', Array.from(sortObject.brand));
      const slidersElemPrice: HTMLElement[] = createMultiSlider('Price');
      const slidersElemStock: HTMLElement[] = createMultiSlider('Stock');

      const descriptionCategory: HTMLHeadingElement = createElement('h3', HTMLHeadingElement, {
        classes: ['brand__description', 'description'],
        text: 'Category',
      });
      const descriptionBrand: HTMLHeadingElement = createElement('h3', HTMLHeadingElement, {
        classes: ['brand__description', 'description'],
        text: 'Brand',
      });

      filterCategories.append(descriptionCategory, filterCategory.elem);
      filterBrands.append(descriptionBrand, filterBrand.elem);

      multiSliderPrice.append(...slidersElemPrice);
      multiSliderStock.append(...slidersElemStock);
    }
  });

  wrapper.append(divAside.elem, main);
  document.body.append(wrapper);
}
