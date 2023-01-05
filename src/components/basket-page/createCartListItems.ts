import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { createElement } from '../elements/generateElement';
import createDescription from '../../utils/createDescription';
import { countProductsNumberElem } from './createSummary';

export function createCartListItems(data: DataProducts[], elem: HTMLElement) {
  const arrayData: Card[] = [];
  const arrayDataCard: HTMLElement[] = [];

  let counter: number = data.length;

  const listItemsElem: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: ['cart-content__products-list', 'products-list'],
  });

  const titleAndControl: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: listItemsElem,
    classes: ['products-list__title-and-control', 'title-and-control'],
  });

  createElement(ConstantsDom.H2, HTMLHeadElement, {
    parentElement: titleAndControl,
    classes: ['products-list__title', 'title-item-list'],
    text: 'Products in Cart',
  });

  const controlListItems: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: titleAndControl,
    classes: ['products-list__control', 'control-item-list'],
  });

  const limitListItems: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: controlListItems,
    classes: ['control-item-list__limit', 'limit'],
  });

  createElement(ConstantsDom.SPAN, HTMLDivElement, {
    parentElement: limitListItems,
    classes: ['control-item-list__title-limit', 'title-limit', 'control-item-list__title'],
    text: 'Limit: ',
  });

  const inputlimit: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    parentElement: limitListItems,
    classes: ['control-item-list__input-limit', 'input-limit'],
    attributes: [
      ['type', 'number'],
      ['min', '1'],
      ['max', `${data.length}`],
    ],
  });
  inputlimit.value = data.length.toString();

  const pageControl: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: controlListItems,
    classes: ['control-item-list__page-control', 'page-control'],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: pageControl,
    classes: ['page-control__title', 'control-item-list__title'],
    text: 'Page:',
  });

  createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    parentElement: pageControl,
    classes: ['page-control__button', 'control-button'],
    text: ' < ',
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: pageControl,
    classes: ['page-control__number', 'page-control-number'],
    text: '1',
  });

  createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    parentElement: pageControl,
    classes: ['page-control__button', 'control-button'],
    text: ' > ',
  });

  const productsListItem: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: listItemsElem,
    classes: ['products-list__item', 'list-item'],
  });

  data.forEach((basketItem) => {
    const cartItems: Card = new Card(ConstantsDom.DIV, basketItem, {
      classes: ['product-item', 'cart-content__product-item'],
      attributes: [['id', basketItem.id.toString()]],
    });
    const article: HTMLElement = createElement(ConstantsDom.ARTICLE, HTMLElement, {
      parentElement: cartItems.elem,
      classes: [ConstantsDom.BLOCK_SHADOWED_COLUMN],
    });
    const divName: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: article,
      classes: [ConstantsDom.CARD_NAME_COLUMN_DIV],
    });
    createElement(ConstantsDom.H3, HTMLElement, {
      parentElement: divName,
      classes: [ConstantsDom.CARD_NAME_COLUMN],
      text: basketItem.title,
    });
    const cartItem: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: article,
      classes: [ConstantsDom.CARD_CONTAINER_COLUMN],
    });
    const div: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: cartItem,
      classes: [ConstantsDom.CARD_BLOCK_IMAGE_COLUMN],
    });
    createElement(ConstantsDom.IMG, HTMLElement, {
      parentElement: div,
      classes: [ConstantsDom.CARD_IMAGE_COLUMN],
      attributes: [
        [ConstantsDom.SRC, basketItem.thumbnail],
        [ConstantsDom.ALT, ConstantsDom.CARD_COLUMN],
      ],
    });
    const content: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: cartItem,
      classes: [ConstantsDom.CARD_CONTENT_COLUMN],
    });
    const divRating: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: content,
      classes: [ConstantsDom.CARD_RATING_COLUMN_DIV],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divRating,
      classes: [ConstantsDom.CARD_RATING_COLUMN],
      text: `Rating: ${basketItem.rating.toString()}`,
    });
    const divBrand: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: content,
      classes: [ConstantsDom.CARD_BRAND_COLUMN_DIV],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divBrand,
      classes: [ConstantsDom.CARD_BRAND_COLUMN],
      text: `Brand: ${basketItem.brand.toString()}`,
    });
    const divCategory: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: content,
      classes: [ConstantsDom.CARD_CATEGORY_COLUMN_DIV],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divCategory,
      classes: [ConstantsDom.CARD_CATEGORY_COLUMN],
      text: `Category: ${basketItem.category.toString()}`,
    });
    const divDescription: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: content,
      classes: [ConstantsDom.CARD_DESCRIPTION_COLUMN_DIV],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divDescription,
      classes: [ConstantsDom.CARD_DESCRIPTION_COLUMN],
      text: `Description: ${basketItem.description.toString()}`,
    });

    const divCount: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
      parentElement: cartItem,
      classes: ['item-count'],
    });

    createElement(ConstantsDom.SPAN, HTMLSpanElement, {
      parentElement: divCount,
      classes: ['item-count__title', 'title-name'],
      text: 'Count',
    });

    const divCountControl: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
      parentElement: divCount,
      classes: ['item-count-control'],
    });

    const buttonMinus: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
      parentElement: divCountControl,
      classes: ['count-control__button'],
      text: ' - ',
    });

    const countNumber: HTMLSpanElement = createElement(ConstantsDom.SPAN, HTMLSpanElement, {
      parentElement: divCountControl,
      classes: ['count-control__button'],
      text: '1',
    });

    const buttonPlus: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
      parentElement: divCountControl,
      classes: ['count-control__button'],
      text: ' + ',
    });

    const divCost: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
      parentElement: cartItem,
      classes: ['item-price'],
    });

    createElement(ConstantsDom.SPAN, HTMLSpanElement, {
      parentElement: divCost,
      classes: ['item-price__title', 'title-name'],
      text: 'Price',
    });

    createElement(ConstantsDom.DIV, HTMLDivElement, {
      parentElement: divCost,
      classes: ['item-price-number'],
      text: `${basketItem.price}`,
    });

    const totalPrice: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
      parentElement: cartItem,
      classes: ['item-price'],
    });

    createElement(ConstantsDom.SPAN, HTMLSpanElement, {
      parentElement: totalPrice,
      classes: ['item-price__title', 'title-name'],
      text: 'Total Amount',
    });

    const totalPriceNumber: HTMLSpanElement = createElement(ConstantsDom.DIV, HTMLSpanElement, {
      parentElement: totalPrice,
      classes: ['item-price-number'],
      text: `${basketItem.price}`,
    });

    const elements: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: cartItem,
      classes: [ConstantsDom.CARD_ELEMENTS_COLUMN],
    });
    const divStock: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: elements,
      classes: [ConstantsDom.CARD_STOCK_COLUMN_DIV],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divStock,
      classes: [ConstantsDom.CARD_STOCK_COLUMN],
      text: `Stock: ${basketItem.stock.toString()}`,
    });
    const divPrice: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: elements,
      classes: [ConstantsDom.CARD_PRICE_COLUMN_DIV],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divPrice,
      classes: [ConstantsDom.CARD_PRICE_COLUMN],
      text: `Price: ${basketItem.price.toString()} $`,
    });

    const divButton: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: elements,
      classes: [ConstantsDom.CARD_BUTTON_COLUMN_DIV],
    });
    const buttonDelete: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
      parentElement: divButton,
      classes: [ConstantsDom.BUTTON_CARD_COLUMN, ConstantsDom.BUTTON_CARD_BORDER_COLUMN],
      text: ConstantsDom.DELETE,
    });

    arrayData.push(cartItems);
    arrayDataCard.push(cartItems.elem);
    productsListItem.append(cartItems.elem);

    buttonMinus.onclick = () => {
      if (countNumber.textContent) {
        let numberCount: number = +countNumber.textContent;
        const dicNumber = --numberCount;
        if (dicNumber < 1) {
          counter--;
          countProductsNumberElem.textContent = counter.toString();
          cartItems.elem.remove();
          const productList = productsListItem.children;
          if (productList.length === 0) {
            const description = 'Cart is empty';
            const elemEmpty: HTMLHeadElement = createDescription(HTMLHeadElement, {
              classes: ['cart-content__empty', 'description__empty'],
              text: description,
            });
            elem.innerHTML = '';
            elem.append(elemEmpty);
          }
          //!TODO: Delete carts if dataCart === 0;
          return;
        }
        counter--;
        countProductsNumberElem.textContent = counter.toString();
        totalPriceNumber.textContent = (dicNumber * basketItem.price).toString();
        countNumber.textContent = dicNumber.toString();
      }
    };

    buttonPlus.onclick = () => {
      if (countNumber.textContent) {
        let numberCount: number = +countNumber.textContent;
        const incNumber = ++numberCount;
        if (countNumber.textContent === `${basketItem.stock}`) {
          buttonPlus.disabled = true;
          return;
        }
        counter++;
        countProductsNumberElem.textContent = counter.toString();
        totalPriceNumber.textContent = (incNumber * basketItem.price).toString();
        countNumber.textContent = incNumber.toString();
      }
    };

    buttonDelete.onclick = () => {
      if (cartItems.elem) {
        cartItems.elem.remove();
        const productList = productsListItem.children;
        if (productList.length === 0) {
          const description = 'Cart is empty';
          const elemEmpty: HTMLHeadElement = createDescription(HTMLHeadElement, {
            classes: ['cart-content__empty', 'description__empty'],
            text: description,
          });
          elem.innerHTML = '';
          elem.append(elemEmpty);
        }
        return;
      }
    };
  });

  return listItemsElem;
}
