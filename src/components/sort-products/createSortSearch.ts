import CreateElement from '../elements/CreateElement';
import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import createSortBar from './createSortBar';
import { createState } from './createState';
import { createSearchBar } from './createSearchBar';
import createViewMode from './createViewMode';

export default function createSortSearch() {
  const sortSearch: CreateElement = new CreateElement('div', {
    classes: ['main__sort-search', 'sort-products'],
  });

  const classNameDiv: string[][] = [
    ['sort-products__sort-bar', 'sort-bar'],
    ['sort-products__state', 'state'],
    ['sort-products__search-bar', 'search-bar'],
    ['sort-products__view-mode', 'view-mode'],
  ];

  classNameDiv.forEach((classNames) => {
    const elem: HTMLDivElement = createElement('div', HTMLDivElement, {
      classes: classNames,
    });
    if (classNames.includes(ConstantsDom.SORT_BAR)) {
      sortSearch.elem.append(createSortBar(elem));
    } else if (classNames.includes(ConstantsDom.STATE)) {
      sortSearch.elem.append(createState(elem));
    } else if (classNames.includes(ConstantsDom.SEARCH_BAR)) {
      sortSearch.elem.append(createSearchBar(elem));
    } else if (classNames.includes(ConstantsDom.VIEW_MODE)) {
      sortSearch.elem.append(createViewMode(elem));
    } else throw new Error('Invalid classNames specified');
  });

  return sortSearch;
}
