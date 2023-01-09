import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { createElement } from '../elements/generateElement';
import createDescription from '../../utils/createDescription';
import { countProductsNumberElem } from './createSummary';
import history from '../../utils/history';

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
      classes: ['cart-content__product-items', 'cart-content'],
      attributes: [['id', basketItem.id.toString()]],
    });
    const article: HTMLElement = createElement(ConstantsDom.ARTICLE, HTMLElement, {
      parentElement: cartItems.elem,
      classes: ['product-items__shadowed', 'product-items'],
    });
    const divName: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: article,
      classes: ['product-items__name'],
    });
    createElement(ConstantsDom.H3, HTMLElement, {
      parentElement: divName,
      classes: ['product-item__name'],
      text: basketItem.title,
    });
    const cartItem: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: article,
      classes: ['product-item-container', 'product-item'],
    });
    const div: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: cartItem,
      classes: ['product-item-img__container'],
    });
    createElement(ConstantsDom.IMG, HTMLElement, {
      parentElement: div,
      classes: ['product-item-img'],
      attributes: [
        [ConstantsDom.SRC, basketItem.thumbnail],
        [ConstantsDom.ALT, ConstantsDom.CARD_COLUMN],
      ],
    });
    const content: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: cartItem,
      classes: ['product-item-content__container', 'product-item-content'],
    });
    const divRating: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: content,
      classes: ['product-item-content-rating'],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divRating,
      classes: ['product-item-content-rating__description'],
      text: `Rating: ${basketItem.rating.toString()}`,
    });
    const divBrand: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: content,
      classes: ['product-item-content-brand'],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divBrand,
      classes: ['product-item-content-brand__description'],
      text: `Brand: ${basketItem.brand.toString()}`,
    });
    const divCategory: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: content,
      classes: ['product-item-content-category'],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divCategory,
      classes: ['product-item-content-category__description'],
      text: `Category: ${basketItem.category.toString()}`,
    });
    const divDescription: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: content,
      classes: ['product-item-content-text'],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divDescription,
      classes: ['product-item-content-text__description'],
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
      classes: ['product-item-elements__price-container', 'price-container', 'title-name'],
      text: 'Price',
    });

    createElement(ConstantsDom.DIV, HTMLDivElement, {
      parentElement: divCost,
      classes: ['price-container__number'],
      text: `€${basketItem.price}`,
    });

    const totalPrice: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
      parentElement: cartItem,
      classes: ['item-price'],
    });

    createElement(ConstantsDom.SPAN, HTMLSpanElement, {
      parentElement: totalPrice,
      classes: ['item-price__title', 'title-name'],
      text: 'Total',
    });

    const totalPriceNumber: HTMLSpanElement = createElement(ConstantsDom.DIV, HTMLSpanElement, {
      parentElement: totalPrice,
      classes: ['total-container__number'],
      text: `€${basketItem.price}`,
    });

    const elements: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: cartItem,
      classes: ['product-item-elements', 'product-item-elements__container'],
    });
    const divStock: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: elements,
      classes: ['product-item-elements__stock-container', 'stock-container'],
    });
    createElement(ConstantsDom.P, HTMLElement, {
      parentElement: divStock,
      classes: ['stock-container__text', 'title-name'],
      text: `Stock: ${basketItem.stock.toString()}`,
    });

    const divButton: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
      parentElement: elements,
      classes: [ConstantsDom.CARD_BUTTON_COLUMN_DIV, 'product-item-elements__button-container'],
    });
    const buttonDelete: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
      parentElement: divButton,
      classes: [ConstantsDom.BUTTON_CARD_COLUMN, ConstantsDom.BUTTON_CARD_BORDER_COLUMN, 'button-container__delete'],
      text: ConstantsDom.DELETE,
    });

    arrayData.push(cartItems);
    arrayDataCard.push(cartItems.elem);
    productsListItem.append(cartItems.elem);

    buttonMinus.onclick = () => {
      if (countNumber.innerText) {
        let numberCount: number = +countNumber.innerText;
        const dicNumber = --numberCount;
        if (dicNumber < 1) {
          counter--;
          countProductsNumberElem.innerText = counter.toString();
          cartItems.elem.remove();
          const productList = productsListItem.children;
          if (productList.length === 0) {
            const description = 'Cart is empty';
            const elemEmpty: HTMLHeadElement = createDescription(HTMLHeadElement, {
              classes: ['cart-content__empty', 'description__empty'],
              text: description,
            });
            elem.innerText = '';
            elem.append(elemEmpty);
          }
          //!TODO: Delete carts if dataCart === 0;
          return;
        }
        counter--;
        countProductsNumberElem.innerText = counter.toString();
        totalPriceNumber.innerText = `€${dicNumber * basketItem.price}`;
        countNumber.innerText = dicNumber.toString();
      }
    };

    buttonPlus.onclick = () => {
      if (countNumber.innerText) {
        let numberCount: number = +countNumber.innerText;
        const incNumber = ++numberCount;
        if (countNumber.innerText === `${basketItem.stock}`) {
          buttonPlus.disabled = true;
          return;
        }
        counter++;
        countProductsNumberElem.innerText = counter.toString();
        totalPriceNumber.innerText = `€${incNumber * basketItem.price}`;
        countNumber.innerText = incNumber.toString();
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
          elem.innerText = '';
          elem.append(elemEmpty);
        }
        return;
      }
    };

    cartItems.elem.onclick = (e) => {
      const target: Element = <Element>e.target;
      if (target.closest('product-item-elements__button-container') || target.closest('.item-count')) return;

      window.history.state.id += 1;
      const path = `/product-details/${basketItem.id.toString()}`;
      window.history.pushState({ id: window.history.state.id, path: path }, '', path);
      history();
    };
  });

  return listItemsElem;
}
