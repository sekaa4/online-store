import parseSearchParams from '../parseSearchParams';
import layoutHandler from './layoutHandler';
import sortHandler from './sortHandler';
import searchHandler from './searchHandler';
import { renderCards } from '../render/renderCards';
import { renderCardsList } from '../render/renderCardsList';
import { buildPage } from '../buildPage';
import { ConstantsDom } from '../../models/Dom';
import { inputSearch, imageSearch } from '../sort-products/createSearchBar';

export default function stateHandler() {
  if (window.history.state.path && window.history.state.path !== './') {
    const cardsWrapper: HTMLElement = <HTMLElement>document.querySelector('.cards__wrapper');
    const url: URLSearchParams = parseSearchParams(window.history.state.path);
    sortHandler(url);
    searchHandler(url);
    layoutHandler(url);

    if (cardsWrapper.classList.contains('layout-5-column')) {
      const cardsTable: string | HTMLElement[] = renderCards();
      cardsWrapper.innerHTML = '';
      if (typeof cardsTable === 'string') {
        cardsWrapper.innerHTML = cardsTable;
        localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      } else {
        cardsWrapper.append(...cardsTable);
        localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      }
    } else if (cardsWrapper.classList.contains('layout-column')) {
      const cardsTable: string | HTMLElement[] = renderCardsList();
      cardsWrapper.innerHTML = '';
      if (typeof cardsTable === 'string') {
        cardsWrapper.innerHTML = cardsTable;
        localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      } else {
        cardsWrapper.append(...cardsTable);
        localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      }
    }
  } else {
    if (imageSearch.classList.contains('active__image')) {
      document.body.innerHTML = '';
      localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      buildPage();
      inputSearch.focus();
    } else {
      document.body.innerHTML = '';
      localStorage.removeItem(ConstantsDom.DATA_CURRENT);
      buildPage();
    }
  }
}
