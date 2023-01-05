import CreateElement from '../elements/CreateElement';
import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import { createAside } from '../filters/createAside';
import createSortSearch from '../sort-products/createSortSearch';
import { renderCards } from './renderCards';
//import { errorPage } from './errorPage';
//import { renderBasket } from './renderBasket';

export let cardsWrapperElem: HTMLDivElement;
export let mainElem: CreateElement;

export function renderMain(): void {
  const main: CreateElement = new CreateElement(ConstantsDom.MAIN, {
    classes: [ConstantsDom.MAIN],
  });
  mainElem = main;

  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: main.elem,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });
  //renderDetails

  // const persistentStorage = new LocalStorage();
  // const data: DataProducts[] = persistentStorage.getItem('data');
  // console.log(data);
  // const details = renderDetails(data);
  // wrapper.append(...details);

  //renderError

  // const error = errorPage();
  // wrapper.append(error.elem); //errorPage

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

  // TODO: return instanse of CreateElement mb you'll need a copy in the future.
  const divAside: CreateElement = createAside();
  filterContainer.append(divAside.elem);

  const divCards: string | HTMLElement[] = renderCards();
  typeof divCards === 'string' ? divCards : cardsWrapper.append(...divCards);

  //renderBasket
  //renderBasket();

  document.body.append(main.elem);
}
