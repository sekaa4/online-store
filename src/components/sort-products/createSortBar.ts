import { createElement } from '../elements/generateElement';

export default function createSortBar(elem: HTMLDivElement): HTMLDivElement {
  const select: HTMLSelectElement = createElement('select', HTMLSelectElement, {
    classes: ['sort-bar__select', 'select'],
  });

  createElement('option', HTMLOptionElement, {
    parentElement: select,
    classes: ['select__option', 'select__name'],
    text: 'Sort options:',
    attributes: [
      ['value', 'sort-title'],
      ['disabled', 'disabled'],
      ['selected', 'selected'],
    ],
  });
  createElement('option', HTMLOptionElement, {
    parentElement: select,
    classes: ['select__option'],
    text: 'Sort by price ASC:',
    attributes: [['value', 'price-ASC']],
  });
  createElement('option', HTMLOptionElement, {
    parentElement: select,
    classes: ['select__option'],
    text: 'Sort by price DESC:',
    attributes: [['value', 'price-DESC']],
  });
  createElement('option', HTMLOptionElement, {
    parentElement: select,
    classes: ['select__option'],
    text: 'Sort by rating ASC:',
    attributes: [['value', 'rating-ASC']],
  });
  createElement('option', HTMLOptionElement, {
    parentElement: select,
    classes: ['select__option'],
    text: 'Sort by rating DESC:',
    attributes: [['value', 'rating-DESC']],
  });

  elem.append(select);
  return elem;
}
