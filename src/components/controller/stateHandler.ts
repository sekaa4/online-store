import parseSearchParams from '../parseSearchParams';

export default function stateHandler() {
  const table: HTMLElement = <HTMLElement>document.querySelector('.view-mode__table');
  const list: HTMLElement = <HTMLElement>document.querySelector('.view-mode__list');

  if (window.history.state.path) {
    const url: URLSearchParams = parseSearchParams(window.history.state.path);

    if (url.has('list') && url.get('list') === 'false') {
      table.classList.toggle('view-mode__active', true);
      list.classList.toggle('view-mode__active', false);
    } else if (url.has('list') && url.get('list') === 'true') {
      table.classList.toggle('view-mode__active', false);
      list.classList.toggle('view-mode__active', true);
    }
  }
}
