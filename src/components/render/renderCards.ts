import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { elementDomStorage } from '../elements/generateElement';
import { LocalStorage } from '../../utils/persistentStorage';
import { createCard } from './createCard';

export function renderCards(data: DataProducts[]): HTMLElement[] {
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
