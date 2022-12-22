import { createElement } from '../elements/generateElement';

export default function createSearchBar(elem: HTMLDivElement): HTMLDivElement {
  const searchBar: HTMLInputElement = createElement('input', HTMLInputElement, {
    classes: ['search-bar__input', 'input-search'],
    attributes: [
      ['type', 'search'],
      ['placeholder', 'Search product'],
    ],
  });

  const searchImage: HTMLSpanElement = createElement('span', HTMLSpanElement, {
    classes: ['search-bar__image', 'image-search'],
  });

  elem.append(searchBar, searchImage);

  return elem;
}
