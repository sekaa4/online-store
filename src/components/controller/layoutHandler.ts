export default function layoutHandler(url: URLSearchParams) {
  const table: HTMLElement = <HTMLElement>document.querySelector('.view-mode__table');
  const list: HTMLElement = <HTMLElement>document.querySelector('.view-mode__list');
  const cardsWrapper: HTMLElement = <HTMLElement>document.querySelector('.cards__wrapper');

  if (url.has('list') && url.get('list') === 'false') {
    table.classList.toggle('view-mode__active', true);
    list.classList.toggle('view-mode__active', false);

    if (cardsWrapper.classList.contains('layout-column')) {
      cardsWrapper.classList.remove('layout-column');
      cardsWrapper.classList.add('layout-5-column');
    }
  } else if (url.has('list') && url.get('list') === 'true') {
    table.classList.toggle('view-mode__active', false);
    list.classList.toggle('view-mode__active', true);

    if (cardsWrapper.classList.contains('layout-5-column')) {
      cardsWrapper.classList.remove('layout-5-column');
      cardsWrapper.classList.add('layout-column');
    }
  } else if (!url.has('list')) {
    const table: HTMLElement = <HTMLElement>document.querySelector('.view-mode__table');
    const list: HTMLElement = <HTMLElement>document.querySelector('.view-mode__list');
    table.classList.toggle('view-mode__active', true);
    list.classList.toggle('view-mode__active', false);
    cardsWrapper.classList.remove('layout-column');
    cardsWrapper.classList.add('layout-5-column');
  }
}
