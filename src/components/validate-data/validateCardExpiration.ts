import { ConstantsDom } from '../../models/Dom';
import { createElement } from '../elements/generateElement';

const error: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  classes: [ConstantsDom.MODAL_ERROR],
  text: 'Card valid expiration error',
});

const correct: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  classes: [ConstantsDom.MODAL_CORRECT],
  text: 'Card valid expiration correct',
});

export function validateCardExpiration(input: HTMLInputElement, creditCard: HTMLElement) {
  const value = input.value;
  if (/^(0?[1-9]|1[0-2])\/(\d\d|\d{4})$/.test(value)) {
    error.remove();
    input.classList.remove('input-error');
    creditCard.after(correct);
  } else {
    input.classList.add('input-error');
    correct.remove();
    creditCard.after(error);
  }
}
