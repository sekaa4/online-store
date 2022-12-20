import getData from './getData';
import CreateElement from './CreateElement';
import createFilter from './filters/createFilter';
import { getAllSortData } from './filters/getAllSortData';
import createMultiSlider from './filters/createMultiSlider';
import createButtons from './filters/createButtons';

export function createAside() {
  const main: HTMLElement = document.createElement('main');
  const wrapper: HTMLDivElement = document.createElement('div');
  const divMain: HTMLDivElement = document.createElement('div');
  const divAside: CreateElement = new CreateElement('div', ['main__aside', 'aside']);

  getData().then((data) => {
    const sortObject: object = getAllSortData(data, ['category', 'brand', 'price', 'stock']);
    console.log(sortObject);
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

    const filterCategories: Element | null | undefined = divAside.chooseElem('filter__categories');
    const filterBrands: Element | null | undefined = divAside.chooseElem('filter__brands');
    const multiSliderPrice: Element | null | undefined = divAside.chooseElem('dual-slider__price');
    const multiSliderStock: Element | null | undefined = divAside.chooseElem('dual-slider__stock');
    const filterButtons: Element | null | undefined = divAside.chooseElem('aside__buttons');

    if (filterButtons) {
      const buttons: HTMLElement[] = createButtons(['Reset Filters', 'Copy Link'], 'aside');
      filterButtons.append(...buttons);
    } else throw Error("filterCategories doesn't exist");

    const filterCategory: CreateElement = createFilter('Category', Array.from(sortObject.category));
    const filterBrand: CreateElement = createFilter('Brand', Array.from(sortObject.brand));

    if (filterCategories) {
      const description: HTMLHeadingElement = document.createElement('h3');
      description.classList.add('category__description', 'description');
      description.innerHTML = 'Category';
      filterCategories.append(description, filterCategory.elem);
    } else throw Error("filterCategories doesn't exist");

    if (filterBrands) {
      const description: HTMLHeadingElement = document.createElement('h3');
      description.classList.add('brand__description', 'description');
      description.innerHTML = 'Brand';
      filterBrands.append(description, filterBrand.elem);
    } else throw Error("filterBrand doesn't exist");

    if (multiSliderPrice) {
      const slidersElem: HTMLElement[] = createMultiSlider('Price');
      multiSliderPrice.append(...slidersElem);
    } else throw Error("multiSliderPrice doesn't exist");

    if (multiSliderStock) {
      const slidersElem: HTMLElement[] = createMultiSlider('Stock');
      multiSliderStock.append(...slidersElem);
    } else throw Error("multiSliderPrice doesn't exist");
  });

  wrapper.append(divAside.elem, main);
  document.body.append(wrapper);
}
