import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import CreateElement from '../elements/CreateElement';
import { LocalStorage } from '../../utils/persistentStorage';
import createDescription from '../../utils/createDescription';
import { createCartListItems } from './createCartListItems';
import { createSummary } from './createSummary';

export default function createBasketContent(): HTMLElement {
  const local = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');
  const basketContent: CreateElement = new CreateElement('div', {
    classes: ['cart-page__content', 'cart-content'],
  });

  data.length = 3;

  if (data.length === 0) {
    const description = 'Cart is empty';
    const elemEmpty: HTMLHeadElement = createDescription(HTMLHeadElement, {
      classes: ['cart-content__empty', 'description__empty'],
      text: description,
    });
    basketContent.elem.append(elemEmpty);
    return basketContent.elem;
  }

  const cartListElem = createCartListItems(data, basketContent.elem);
  const summaryElem = createSummary(data);

  basketContent.elem.append(cartListElem, summaryElem);
  return basketContent.elem;
}
