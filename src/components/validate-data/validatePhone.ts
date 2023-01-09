import { ConstantsDom } from '../../models/Dom';
import { createElement } from '../elements/generateElement';

const error: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  classes: [ConstantsDom.MODAL_ERROR],
  text: 'Error',
});

const correct: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
  classes: [ConstantsDom.MODAL_CORRECT],
  text: 'Correct',
});

export function validatePhone(input: HTMLInputElement) {
  const value = input.value;

  if (/[+][0-9]{9,}/.test(value)) {
    error.remove();
    input.classList.remove('input-error');
    input.after(correct);
  } else {
    input.classList.add('input-error');
    correct.remove();
    input.after(error);
  }
}
