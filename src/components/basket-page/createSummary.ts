import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import { renderModal } from '../render/renderModal';
import { count } from '../render/header';
import { LocalStorage } from '../../utils/persistentStorage';
import { RSPromo } from '../../interfaces/RSPromo.type';

const promo: RSPromo = [
  { id: 'rs', name: 'Rolling Scopes School', disc: 10 },
  { id: 'epm', name: 'EPAM Systems', disc: 10 },
];

export let countProductsNumberElem: HTMLSpanElement;
export let btnBuy: HTMLButtonElement;
export let totalProductsNumberElem: HTMLSpanElement;
export let totalDiscountProductsNumberElem: HTMLSpanElement;

export function createSummary(data: DataProducts[]) {
  const local = new LocalStorage();
  const rsPromo: RSPromo | undefined = local.getItem('RS-promo');
  const rsNewPromo: RSPromo = rsPromo ? [...rsPromo] : [];
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
    text: 'Total: ',
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

  const resPromo: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: ['res-promo'],
  });

  const resPromoTitle: HTMLSpanElement = createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    classes: ['res-promo-title'],
    text: '',
  });

  const addButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: ['res-promo-add'],
    text: 'ADD',
  });

  const currentPriceProducts: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: ['summary__total-price', 'current-total-price'],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: currentPriceProducts,
    classes: ['count-products__description'],
    text: 'Total: ',
  });

  const currentPriceNumber = createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: currentPriceProducts,
    classes: ['count-products__number'],
    text: 'empty Total',
  });

  totalDiscountProductsNumberElem = currentPriceNumber;

  const applyCodes: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: ['summary__apply-codes', 'apply-codes'],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: applyCodes,
    classes: ['apply-codes__title'],
    text: 'Applied codes',
  });

  const appliedDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: ['apply-codes__promo-table'],
  });

  // const appliedPromo: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  //   classes: ['apply-codes__promo-title'],
  //   text: '',
  // });

  const buttonBuyNow: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    parentElement: summaryElem,
    classes: ['button', 'button-buy-now', ConstantsDom.BUTTON_CARD_COLUMN, ConstantsDom.BUTTON_CARD_BORDER_COLUMN],
    text: 'Buy Now',
  });
  btnBuy = buttonBuyNow;

  if (rsPromo) {
    const oldSum: number = +count.innerText;
    const disc: number = rsNewPromo.reduce((acc, curr) => {
      acc += curr.disc;
      return acc;
    }, 0);

    totalPriceProducts.classList.add('old-price');
    currentPriceNumber.innerText = `$${(oldSum - oldSum * (disc / 100)).toFixed()}`;
    totalDiscountProductsNumberElem = currentPriceNumber;
    rsPromo.forEach((promoObj) => {
      const appliedPromo: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
        classes: ['apply-codes__promo-title'],
        text: `${promoObj.name} - ${promoObj.disc}%`,
      });
      const dropButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
        classes: ['res-promo-drop'],
        text: 'DROP',
      });
      appliedDiv.append(appliedPromo, dropButton);
      applyCodes.append(appliedDiv);
      totalPriceProducts.after(currentPriceProducts, applyCodes);

      dropButton.onclick = () => {
        appliedPromo.remove();
        dropButton.remove();
        // const elem: HTMLElement = <HTMLElement>dropButton.previousElementSibling;
        const value: string = appliedPromo.innerText;
        rsNewPromo.forEach((promoObj, index) => {
          if (value === `${promoObj.name} - ${promoObj.disc}%`) {
            rsNewPromo.splice(index, 1);
            local.setItem('RS-promo', rsNewPromo);
          }
        });

        if (rsNewPromo.length === 0) {
          currentPriceProducts.remove();
          applyCodes.remove();
          totalPriceProducts.classList.remove('old-price');
          localStorage.removeItem('RS-promo');
        } else {
          local.setItem('RS-promo', rsNewPromo);
          const disc: number = rsNewPromo.reduce((acc, curr) => {
            acc += curr.disc;
            return acc;
          }, 0);

          const oldSum: number = +count.innerText;
          currentPriceNumber.innerText = `$${(oldSum - oldSum * (disc / 100)).toFixed()}`;
        }
      };
    });
  }

  //const arrDiscount: RSPromo = [];

  promoInput.oninput = () => {
    //const promoTitles = Object.keys(promo) as Array<keyof typeof promo>;
    // rsNewPromo = rsPromo ? [...rsPromo] : [];
    const value = promoInput.value.toLowerCase();
    resPromo.remove();

    if (rsNewPromo) {
      rsNewPromo.forEach((promoObj) => {
        if (promoObj.id === value) {
          resPromo.innerText = '';
          resPromoTitle.innerText = `${promoObj.name} - ${promoObj.disc}%`;
          resPromo.append(resPromoTitle);
          promoDivElem.after(resPromo);
          return;
        }
      });

      if (
        !rsNewPromo.find((promoObj) => {
          return promoObj.id === value;
        })
      ) {
        promo.forEach((promoObj) => {
          if (promoObj.id === value) {
            if (!rsNewPromo.includes(promoObj)) rsNewPromo.push(promoObj);
            resPromo.innerText = '';
            resPromoTitle.innerText = `${promoObj.name} - ${promoObj.disc}%`;
            resPromo.append(resPromoTitle, addButton);
            promoDivElem.after(resPromo);
          }
        });
      }
    }

    addButton.onclick = () => {
      //const rsNewPromo: RSPromo = rsPromo ? [...rsPromo] : [];
      addButton.remove();
      const disc: number = rsNewPromo.reduce((acc, curr) => {
        acc += curr.disc;
        return acc;
      }, 0);
      const oldSum: number = +count.innerText;
      totalPriceProducts.classList.add('old-price');
      currentPriceNumber.innerText = `$${(oldSum - oldSum * (disc / 100)).toFixed()}`;
      totalDiscountProductsNumberElem = currentPriceNumber;

      const appliedPromo: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
        classes: ['apply-codes__promo-title'],
      });
      appliedPromo.textContent = `${resPromoTitle.textContent}`;

      const dropButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
        classes: ['res-promo-drop'],
        text: 'DROP',
      });

      appliedDiv.append(appliedPromo, dropButton);
      applyCodes.append(appliedDiv);
      totalPriceProducts.after(currentPriceProducts, applyCodes);

      dropButton.onclick = () => {
        const elem: HTMLElement = <HTMLElement>dropButton.previousElementSibling;
        const value: string = <string>elem.textContent;
        appliedPromo.remove();
        dropButton.remove();
        rsNewPromo.forEach((promoObj, index) => {
          if (value === `${promoObj.name} - ${promoObj.disc}%`) {
            rsNewPromo.splice(index, 1);
          }
          local.setItem('RS-promo', rsNewPromo);
        });
        if (rsNewPromo.length === 0) {
          currentPriceProducts.remove();
          applyCodes.remove();
          totalPriceProducts.classList.remove('old-price');
          localStorage.removeItem('RS-promo');
        } else {
          local.setItem('RS-promo', rsNewPromo);
          const disc: number = rsNewPromo.reduce((acc, curr) => {
            acc += curr.disc;
            return acc;
          }, 0);
          const oldSum: number = +count.innerText;
          currentPriceNumber.innerText = `$${(oldSum - oldSum * (disc / 100)).toFixed()}`;
        }
      };

      local.setItem('RS-promo', rsNewPromo);
    };
  };

  buttonBuyNow.onclick = () => {
    const modal = renderModal();
    document.body.style.overflow = 'hidden';
    document.body.append(modal.elem);
  };

  return summaryElem;
}
