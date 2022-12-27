import parseSearchParams from '../parseSearchParams';
import layoutHandler from './layoutHandler';
import sortHandler from './sortHandler';
import { renderCards } from '../render/renderCards';
import { renderCardsList } from '../render/renderCardsList';
import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { buildPage } from '../buildPage';

export default function stateHandler() {
  const local: LocalStorage = new LocalStorage();

  if (window.history.state.path) {
    const cardsWrapper: HTMLElement = <HTMLElement>document.querySelector('.cards__wrapper');
    const url: URLSearchParams = parseSearchParams(window.history.state.path);
    sortHandler(url);
    layoutHandler(url);

    const data: DataProducts[] = local.getItem('dataCurrent') || local.getItem('data');
    const state: HTMLElement = <HTMLElement>document.querySelector('.state__value');
    state.textContent = data.length.toString();

    if (cardsWrapper.classList.contains('layout-5-column')) {
      const cardsTable: HTMLElement[] = renderCards(data);
      cardsWrapper.innerHTML = '';
      cardsWrapper.append(...cardsTable);
    } else if (cardsWrapper.classList.contains('layout-column')) {
      const cardsTable: HTMLElement[] = renderCardsList(data);
      cardsWrapper.innerHTML = '';
      cardsWrapper.append(...cardsTable);
    }
  } else {
    document.body.innerHTML = '';
    buildPage();
  }
}
