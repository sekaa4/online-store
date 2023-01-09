import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import { renderModal } from '../render/renderModal';
import { count } from '../render/header';

const promo = {
  rs: 'Rolling Scopes School - discount 10%',
  epm: 'EPAM Systems - 10%',
};

export let countProductsNumberElem: HTMLSpanElement;
export let btnBuy: HTMLButtonElement;
export let totalProductsNumberElem: HTMLSpanElement;

export function createSummary(data: DataProducts[]) {
  const summaryElem: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: ['cart-content__summary', 'summary'],
  });

  createElement(ConstantsDom.H2, HTMLHeadElement, {
    parentElement: summaryElem,
    classes: ['summary-title', 'summary__title'],
    text: 'Summary',
  });

  const countProducts: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: summaryElem,
    classes: ['count-products', 'summary__count-products'],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: countProducts,
    classes: ['count-products__description'],
    text: 'Products:',
  });

  const countNumber = createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: countProducts,
    classes: ['count-products__number'],
    text: `${data.length}`,
  });
  countProductsNumberElem = countNumber;

  const totalPriceProducts: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: summaryElem,
    classes: ['summary__total-price'],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: totalPriceProducts,
    classes: ['count-products__description'],
    text: 'Total:',
  });

  const totalNumber = createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: totalPriceProducts,
    classes: ['count-products__number'],
    text: `$${count.innerText}`,
  });
  totalProductsNumberElem = totalNumber;

  const promoDivElem: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: summaryElem,
    classes: ['summary__promo-code', 'promo-code'],
  });

  const promoInput = createElement('input', HTMLInputElement, {
    parentElement: promoDivElem,
    classes: ['promo-code__input'],
    attributes: [
      ['type', 'search'],
      ['placeholder', 'Enter promo code'],
    ],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: summaryElem,
    classes: ['summary__promo-test-text', 'promo-test-text'],
    text: "Promo for test: 'RS', 'EPM'",
  });

  const buttonBuyNow: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    parentElement: summaryElem,
    classes: ['button', 'button-buy-now', ConstantsDom.BUTTON_CARD_COLUMN, ConstantsDom.BUTTON_CARD_BORDER_COLUMN],
    text: 'Buy Now',
  });
  btnBuy = buttonBuyNow;

  const currentPriceProducts: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: ['summary__total-price', 'current-total-price'],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: currentPriceProducts,
    classes: ['count-products__description'],
    text: 'Total',
  });

  const currentPriceNumber = createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: currentPriceProducts,
    classes: ['count-products__number'],
    text: 'empty Total',
  });

  const applyCodes: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: ['summary__apply-codes', 'apply-codes'],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: applyCodes,
    classes: ['apply-codes__title'],
    text: 'Applied codes',
  });

  const appliedDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: applyCodes,
    classes: ['apply-codes__promo-table'],
  });

  const arrDiscount: string[] = [];
  let appliedDiscount = false;
  promoInput.oninput = () => {
    const promoTitles = Object.keys(promo) as Array<keyof typeof promo>;
    const value = promoInput.value.toLowerCase() as keyof typeof promo;
    if (promoTitles.includes(value)) {
      const discount = promo[value];
      const resPromo: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
        classes: ['res-promo'],
      });

      const resPromoTitle: HTMLSpanElement = createElement(ConstantsDom.SPAN, HTMLSpanElement, {
        parentElement: resPromo,
        classes: ['res-promo-title'],
        text: discount,
      });

      if (!arrDiscount.includes(discount)) {
        const addButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
          parentElement: resPromo,
          classes: ['res-promo-add'],
          text: 'ADD',
        });

        addButton.onclick = () => {
          const text: string = <string>resPromoTitle.innerText;
          arrDiscount.push(discount);
          totalPriceProducts.classList.add('old-price');
          addButton.remove();

          const appliedPromo: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
            parentElement: appliedDiv,
            classes: ['apply-codes__promo-title'],
            text: text,
          });

          const dropButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
            parentElement: appliedPromo,
            classes: ['res-promo-drop'],
            text: 'DROP',
          });

          dropButton.onclick = () => {
            appliedPromo.remove();
            const elem: HTMLElement = <HTMLElement>dropButton.previousElementSibling;
            const value: string = <string>elem.innerText;
            arrDiscount.splice(arrDiscount.indexOf(value), 1);
            if (arrDiscount.length === 0) {
              currentPriceProducts.remove();
              applyCodes.remove();
              totalPriceProducts.classList.remove('old-price');
              appliedDiscount = false;
            }

            promoInput.value = '';
          };

          if (!appliedDiscount) {
            totalPriceProducts.after(currentPriceProducts, applyCodes);
            appliedDiscount = true;
          } else {
            currentPriceNumber.innerText = 'new Price';
          }
        };

        promoDivElem.after(resPromo);
      } else {
        promoDivElem.after(resPromo);
      }
    } else {
      const resProm = <HTMLDivElement>promoDivElem.nextElementSibling;
      if (resProm.classList.contains('res-promo')) {
        resProm.remove();
      }
    }
  };

  buttonBuyNow.onclick = () => {
    const modal = renderModal();
    document.body.style.overflow = 'hidden';
    document.body.append(modal.elem);
  };

  return summaryElem;
}
