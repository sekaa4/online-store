import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { createElement } from '../elements/generateElement';
import history from '../../utils/history';

export function createCardsList(data: DataProducts) {
  const cardShell: Card = new Card(ConstantsDom.DIV, data, {
    classes: [ConstantsDom.CARDS_SHELL_COLUMN],
  });
  const article: HTMLElement = createElement(ConstantsDom.ARTICLE, HTMLElement, {
    parentElement: cardShell.elem,
    classes: [ConstantsDom.BLOCK_SHADOWED_COLUMN],
  });
  const divName: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: article,
    classes: [ConstantsDom.CARD_NAME_COLUMN_DIV],
  });
  createElement(ConstantsDom.H3, HTMLElement, {
    parentElement: divName,
    classes: [ConstantsDom.CARD_NAME_COLUMN],
    text: data.title,
  });
  const card: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: article,
    classes: [ConstantsDom.CARD_CONTAINER_COLUMN],
  });
  const div: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: card,
    classes: [ConstantsDom.CARD_BLOCK_IMAGE_COLUMN],
  });
  createElement(ConstantsDom.IMG, HTMLElement, {
    parentElement: div,
    classes: [ConstantsDom.CARD_IMAGE_COLUMN],
    attributes: [
      [ConstantsDom.SRC, data.thumbnail],
      [ConstantsDom.ALT, ConstantsDom.CARD_COLUMN],
    ],
  });
  const content: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: card,
    classes: [ConstantsDom.CARD_CONTENT_COLUMN],
  });
  const divRating: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_RATING_COLUMN_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divRating,
    classes: [ConstantsDom.CARD_RATING_COLUMN],
    text: `Rating: ${data.rating.toString()}`,
  });
  const divBrand: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_BRAND_COLUMN_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divBrand,
    classes: [ConstantsDom.CARD_BRAND_COLUMN],
    text: `Brand: ${data.brand.toString()}`,
  });
  const divCategory: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_CATEGORY_COLUMN_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divCategory,
    classes: [ConstantsDom.CARD_CATEGORY_COLUMN],
    text: `Category: ${data.category.toString()}`,
  });
  const divDescription: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_DESCRIPTION_COLUMN_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divDescription,
    classes: [ConstantsDom.CARD_DESCRIPTION_COLUMN],
    text: `Description: ${data.description.toString()}`,
  });

  const elements: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: card,
    classes: [ConstantsDom.CARD_ELEMENTS_COLUMN],
  });
  const divStock: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: elements,
    classes: [ConstantsDom.CARD_STOCK_COLUMN_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divStock,
    classes: [ConstantsDom.CARD_STOCK_COLUMN],
    text: `Stock: ${data.stock.toString()}`,
  });
  const divPrice: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: elements,
    classes: [ConstantsDom.CARD_PRICE_COLUMN_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divPrice,
    classes: [ConstantsDom.CARD_PRICE_COLUMN],
    text: `Price: ${data.price.toString()} $`,
  });
  const divButton: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: elements,
    classes: [ConstantsDom.CARD_BUTTON_COLUMN_DIV],
  });
  createElement(ConstantsDom.BUTTON, HTMLElement, {
    parentElement: divButton,
    classes: [ConstantsDom.BUTTON_CARD_COLUMN, ConstantsDom.BUTTON_CARD_BORDER_COLUMN],
    text: ConstantsDom.BUY,
  });

  cardShell.elem.addEventListener('click', (e) => {
    const target: Element = <Element>e.target;
    if (target.classList.contains(ConstantsDom.BUTTON_CARD_COLUMN)) return;

    window.history.state.id += 1;
    const path = `/product-details/${data.id.toString()}`;
    window.history.pushState({ id: window.history.state.id, path: path }, '', path);
    history();
  });

  document.body.append(cardShell.elem);
  return cardShell;
}
