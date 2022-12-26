import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { elementDomStorage } from '../elements/generateElement';
import { LocalStorage } from '../../utils/persistentStorage';
import { createCardsList } from './createCardsList';

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
