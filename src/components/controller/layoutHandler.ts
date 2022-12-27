import { renderCardsList } from '../render/renderCardsList';
import { renderCards } from '../render/renderCards';
import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';

export default function layoutHandler(url: URLSearchParams) {
  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem('data');
  const table: HTMLElement = <HTMLElement>document.querySelector('.view-mode__table');
  const list: HTMLElement = <HTMLElement>document.querySelector('.view-mode__list');
  const cardsWrapper: HTMLElement = <HTMLElement>document.querySelector('.cards__wrapper');

  if (url.has('list') && url.get('list') === 'false') {
    table.classList.toggle('view-mode__active', true);
    list.classList.toggle('view-mode__active', false);

    if (cardsWrapper.classList.contains('layout-column')) {
      cardsWrapper.classList.remove('layout-column');
      cardsWrapper.classList.add('layout-5-column');
      const cardsTable: HTMLElement[] = renderCards(data);
      cardsWrapper.innerHTML = '';
      cardsWrapper.append(...cardsTable);
    }
  } else if (url.has('list') && url.get('list') === 'true') {
    table.classList.toggle('view-mode__active', false);
    list.classList.toggle('view-mode__active', true);

    if (cardsWrapper.classList.contains('layout-5-column')) {
      cardsWrapper.classList.remove('layout-5-column');
      cardsWrapper.classList.add('layout-column');
      const cardsTable: HTMLElement[] = renderCardsList(data);
      cardsWrapper.innerHTML = '';
      cardsWrapper.append(...cardsTable);
    }
  }
}
