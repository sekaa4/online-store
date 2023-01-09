import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { elementDomStorage } from '../elements/generateElement';
import { LocalStorage } from '../../utils/persistentStorage';
import { createCard } from './createCard';
import { stateElem } from '../sort-products/createState';
import createDescription from '../../utils/createDescription';

export function renderCards(): HTMLElement[] | HTMLElement {
  const local = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');
  stateElem.innerText = data.length.toString();

  if (data.length === 0) {
    const description = 'Products not found, try another request search';
    const elemEmpty: HTMLHeadElement = createDescription(HTMLHeadElement, {
      classes: ['data-cards__empty', 'description__empty'],
      text: description,
    });
    return elemEmpty;
  }

  elementDomStorage.get(ConstantsDom.CARD_CONTAINER);
  const arrayData: Card[] = [];
  const arrayDataCard: HTMLElement[] = [];
  data.forEach((cardData) => {
    const card = createCard(cardData);
    arrayData.push(card);
    arrayDataCard.push(card.elem);
  });

  return arrayDataCard;
}
