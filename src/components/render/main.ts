import CreateElement from '../elements/CreateElement';
import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import { createAside } from '../filters/createAside';
import createSortSearch from '../sort-products/createSortSearch';
import { renderCards } from './cards';
import { renderCardsColumn } from './cardsColumn';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';

export function renderMain(data: DataProducts[]): void {
  const main: CreateElement = new CreateElement(ConstantsDom.MAIN, {
    classes: [ConstantsDom.MAIN],
  });

  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: main.elem,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });

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

  // const cardsWrapperColumn: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
  //   parentElement: itemsContainer,
  //   classes: [ConstantsDom.CARDS_WRAPPER, ConstantsDom.LAYOUT_COLUMN],
  // });

  //TODO: return instanse of CreateElement mb you'll need a copy in the future.
  const divAside: CreateElement = createAside();
  filterContainer.append(divAside.elem);
  const divCards = renderCards(data);
  cardsWrapper.append(...divCards);

  // const divCards = renderCardsColumn(data);
  // cardsWrapperColumn.append(...divCards);

  document.body.append(main.elem);
}
