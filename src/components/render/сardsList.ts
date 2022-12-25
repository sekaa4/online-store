import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { createElement, elementDomStorage } from '../elements/generateElement';
import { LocalStorage } from '../../utils/persistentStorage';

export function createCardsList(data: DataProducts) {
  const card: Card = new Card(ConstantsDom.ARTICLE, data, {
    classes: [ConstantsDom.CARD_CONTAINER_COLUMN, ConstantsDom.BLOCK_SHADOWED_COLUMN],
  });
  const div: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: card.elem,
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
    parentElement: card.elem,
    classes: [ConstantsDom.CARD_CONTENT_COLUMN],
  });
  createElement(ConstantsDom.H3, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_NAME_COLUMN],
    text: data.title,
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_RATING_COLUMN],
    text: `Rating: ${data.rating.toString()}`,
  });
  const elements: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: content,
    classes: [ConstantsDom.CARD_ELEMENTS_COLUMN],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: elements,
    classes: [ConstantsDom.CARD_PRICE_COLUMN],
    text: `Price: ${data.price.toString()} $`,
  });
  createElement(ConstantsDom.BUTTON, HTMLElement, {
    parentElement: elements,
    classes: [ConstantsDom.BUTTON_CARD_COLUMN, ConstantsDom.BUTTON_CARD_BORDER_COLUMN],
    text: ConstantsDom.BUY,
  });
  document.body.append(card.elem);
  return card;
}

export function renderCardsList(data: DataProducts[]): HTMLElement[] {
  elementDomStorage.get(ConstantsDom.CARD_CONTAINER_COLUMN);
  const arrayData: Card[] = [];
  const arrayDataCard: HTMLElement[] = [];
  data.forEach((cardData) => {
    const card = createCardsList(cardData);
    arrayData.push(card);
    arrayDataCard.push(card.elem);
  });
  const CardsListStorage = new LocalStorage();
  CardsListStorage.setItem('cardsList', arrayData);
  return arrayDataCard;
}
