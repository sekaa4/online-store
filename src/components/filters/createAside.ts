import CreateElement from '../elements/CreateElement';
import createFilter from './createFilter';
import { getAllSortData } from '../sortData/getAllSortData';
import createMultiSlider from './createMultiSlider';
import createButtons from './createButtons';
import { AllDataSort } from '../../interfaces/DataSort.type';
import { createElement } from '../elements/generateElement';
import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import ControllerFilterElement from '../controller/ControllerFilterElement';

export function createAside(): CreateElement {
  const divAside: CreateElement = new CreateElement('div', {
    classes: ['main__aside', 'aside'],
  });

  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem('data');
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
  const multiSliderPrice: Element = divAside.chooseElem('dual-slider__price');
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

  const controllerFilter = new ControllerFilterElement(divAside.elem);
  controllerFilter.start();

  return divAside;
}
