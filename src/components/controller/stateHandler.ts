import parseSearchParams from '../parseSearchParams';
import layoutHandler from './layoutHandler';
import sortHandler from './sortHandler';
import searchHandler from './searchHandler';
import { renderCards } from '../render/renderCards';
import { renderCardsList } from '../render/renderCardsList';
import { buildPage } from '../buildPage';
import { ConstantsDom } from '../../models/Dom';
import { inputSearch, imageSearch } from '../sort-products/createSearchBar';
import filterHandler from './filterHandler';

export default function stateHandler() {
  const historyPath: string = <string>window.history.state.path;

  if (historyPath && historyPath.includes('?') && window.location.pathname === '/') {
    const cardsWrapper: HTMLElement = <HTMLElement>document.querySelector('.cards__wrapper');
    const url: URLSearchParams = parseSearchParams(window.history.state.path);
    sortHandler(url);
    searchHandler(url);
    filterHandler(url);
    layoutHandler(url);

    if (cardsWrapper.classList.contains('layout-5-column')) {
      const cardsTable: HTMLElement | HTMLElement[] = renderCards();
      cardsWrapper.innerText = '';
      if (cardsTable instanceof HTMLElement) {
        cardsWrapper.append(cardsTable);
        localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      } else {
        cardsWrapper.append(...cardsTable);
        localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      }
    } else if (cardsWrapper.classList.contains('layout-column')) {
      const cardsTable: HTMLElement | HTMLElement[] = renderCardsList();
      cardsWrapper.innerText = '';
      if (cardsTable instanceof HTMLElement) {
        cardsWrapper.append(cardsTable);
        localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      } else {
        cardsWrapper.append(...cardsTable);
        localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      }
    }
  } else {
    if (imageSearch?.classList.contains('active__image')) {
      localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      document.body.innerText = '';
      buildPage();
      inputSearch.focus();
    } else {
      document.body.innerText = '';
      localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      buildPage();
    }
  }
}
