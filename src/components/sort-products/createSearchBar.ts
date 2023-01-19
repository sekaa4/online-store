import { createElement } from '../elements/generateElement';
import ControllerSearchElement from '../controller/ControllerSearchElement';

export let inputSearch: HTMLInputElement;
export let imageSearch: HTMLSpanElement;

export function createSearchBar(elem: HTMLDivElement): HTMLDivElement {
  const searchBar: HTMLInputElement = createElement('input', HTMLInputElement, {
    classes: ['search-bar__input', 'input-search'],
    attributes: [
      ['type', 'search'],
      ['placeholder', 'Search product'],
    ],
  });
  inputSearch = searchBar;

  const searchImage: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['search-bar__image', 'image-search'],
  });
  searchImage.onclick = () => {
    if (searchBar.value) {
      searchBar.value = '';
      searchBar.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };
  imageSearch = searchImage;

  elem.addEventListener('mouseover', (): void => {
    if (inputSearch.value !== '') {
      searchImage.classList.add('active__image');
    }
  });

  elem.addEventListener('mouseout', (): void => {
    if (inputSearch.classList.contains('focus')) {
      searchImage.classList.add('active__image');
    } else searchImage.classList.remove('active__image');
  });

  inputSearch.addEventListener('click', (): void => {
    if (inputSearch.value !== '') {
      searchImage.classList.add('focus__image');
    }
  });

  inputSearch.addEventListener('blur', (): void => {
    searchImage.classList.remove('focus__image');
  });

  if (searchBar.isConnected) {
    searchImage.classList.add('active__image');
  } else searchImage.classList.remove('active__image');

  elem.append(searchBar, searchImage);

  const controllerSearch = new ControllerSearchElement(elem);
  controllerSearch.start();

  return elem;
}
