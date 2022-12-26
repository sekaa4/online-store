import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { createElement } from '../elements/generateElement';

export function createCard(data: DataProducts) {
  const cardShell: Card = new Card(ConstantsDom.DIV, data, {
    classes: [ConstantsDom.CARDS_SHELL],
  });

  const card: HTMLElement = createElement(ConstantsDom.ARTICLE, HTMLElement, {
    parentElement: cardShell.elem,
    classes: [ConstantsDom.CARD_CONTAINER, ConstantsDom.BLOCK_SHADOWED],
  });
  const div: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: card,
    classes: [ConstantsDom.CARD_BLOCK_IMAGE],
  });
  createElement(ConstantsDom.IMG, HTMLElement, {
    parentElement: div,
    classes: [ConstantsDom.CARD_IMAGE],
    attributes: [
      [ConstantsDom.SRC, data.thumbnail],
      [ConstantsDom.ALT, ConstantsDom.CARD],
    ],
  });
  const content: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: card,
    classes: [ConstantsDom.CARD_CONTENT],
  });
  createElement(ConstantsDom.H3, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_NAME],
    text: data.title,
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_RATING],
    text: `Rating: ${data.rating.toString()}`,
  });
  const elements: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_ELEMENTS],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: elements,
    classes: [ConstantsDom.CARD_PRICE],
    text: `Price: ${data.price.toString()} $`,
  });
  createElement(ConstantsDom.BUTTON, HTMLElement, {
    parentElement: elements,
    classes: [ConstantsDom.BUTTON_CARD, ConstantsDom.BUTTON_CARD_BORDER],
    text: ConstantsDom.BUY,
  });
  const info: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: card,
    classes: [ConstantsDom.INFO_CARD],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: info,
    classes: [ConstantsDom.CARD_BRAND],
    text: `Brand: ${data.brand.toString()}`,
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: info,
    classes: [ConstantsDom.CARD_CATEGORY],
    text: `Category: ${data.category.toString()}`,
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: info,
    classes: [ConstantsDom.CARD_STOCK],
    text: `Stock: ${data.stock.toString()}`,
  });
  document.body.append(cardShell.elem);
  return cardShell;
}
