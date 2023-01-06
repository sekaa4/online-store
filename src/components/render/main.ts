import CreateElement from '../elements/CreateElement';
import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import { createAside } from '../filters/createAside';
import createSortSearch from '../sort-products/createSortSearch';
import { renderCards } from './renderCards';
import { LocalStorage } from '../../utils/persistentStorage';
import { renderDetails } from './renderDetails';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { errorPage } from './errorPage';
import { renderBasket } from './renderBasket';

export let cardsWrapperElem: HTMLDivElement;
export let mainElem: CreateElement;

export function renderMain(): void {
  const path: string = window.location.pathname;

  const main: CreateElement = new CreateElement(ConstantsDom.MAIN, {
    classes: [ConstantsDom.MAIN],
  });
  mainElem = main;

  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: main.elem,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });

  if (path.startsWith('/product-details')) {
    const number = path.split('/').pop();
    const persistentStorage = new LocalStorage();
    const data: DataProducts[] = persistentStorage.getItem('data');
    const isDataNumber = data.find((item) => item.id.toString() === number);
    if (isDataNumber) {
      // fetch(`https://dummyjson.com/products/${number}`)
      //   .then((res) => res.json())
      //   .then((data: DataProducts) => {
      //     const details: Card = renderDetails(data);
      //     wrapper.append(details.elem);
      //   });
      const details: Card = renderDetails(isDataNumber);
      wrapper.append(details.elem);
    } else {
      const error = errorPage();
      wrapper.append(error.elem);
    }
  } else if (path === '/cart' || path.includes('/cart/?')) {
    renderBasket();
  } else if (path === '/') {
    const filterContainer: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: wrapper,
      classes: [ConstantsDom.FILTER_CONTAINER],
    });

    const itemsContainer: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: wrapper,
      classes: [ConstantsDom.ITEMS_CONTAINER],
    });

    const sortSearch: CreateElement = createSortSearch();
    itemsContainer.append(sortSearch.elem);

    const cardsWrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: itemsContainer,
      classes: [ConstantsDom.CARDS_WRAPPER, ConstantsDom.LAYOUT_5],
    });
    cardsWrapperElem = <HTMLDivElement>cardsWrapper;

    const divAside: CreateElement = createAside();
    filterContainer.append(divAside.elem);

    const divCards: HTMLElement | HTMLElement[] = renderCards();
    divCards instanceof HTMLElement ? cardsWrapper.append(divCards) : cardsWrapper.append(...divCards);
  } else {
    const error = errorPage();
    wrapper.append(error.elem);
  }

  document.body.append(main.elem);
}
