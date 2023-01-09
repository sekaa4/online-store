import { ConstantsDom } from '../../models/Dom';
import { createElement } from '../elements/generateElement';

const error: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  classes: [ConstantsDom.MODAL_ERROR],
  text: 'Card number error',
});

const correct: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  classes: [ConstantsDom.MODAL_CORRECT],
  text: 'Card number correct',
});

export function validateCardNumber(input: HTMLInputElement, creditCard: HTMLElement) {
  const value = input.value;
  if (/[0-9]{4}(\s{4}[0-9]{4}){3}/.test(value)) {
    error.remove();
    input.classList.remove('input-error');
    creditCard.after(correct);
  } else {
    input.classList.add('input-error');
    correct.remove();
    creditCard.after(error);
  }
}
