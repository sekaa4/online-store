import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { elementDomStorage } from '../elements/generateElement';
import { LocalStorage } from '../../utils/persistentStorage';
import { createCard } from './createCard';
import { stateElem } from '../sort-products/createState';

export function renderCards(): HTMLElement[] | string {
  const local = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');
  stateElem.textContent = data.length.toString();

  if (data.length === 0) {
    return 'Products not found, try another request search';
  }

  elementDomStorage.get(ConstantsDom.CARD_CONTAINER);
  const arrayData: Card[] = [];
  const arrayDataCard: HTMLElement[] = [];
  data.forEach((cardData) => {
    const card = createCard(cardData);
    arrayData.push(card);
    arrayDataCard.push(card.elem);
  });
  const CardsListStorage = new LocalStorage();
  CardsListStorage.setItem('cards', arrayData);
  return arrayDataCard;
}
