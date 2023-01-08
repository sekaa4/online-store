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

export function validateName(input: HTMLInputElement) {
  const value = input.value;
  if (/[A-Z][a-zA-Z]{2,}(\s[A-Z][a-zA-Z]{2,})+/.test(value)) {
    error.remove();
    input.classList.remove('input-error');
    input.after(correct);
    console.log('GOOD');
  } else {
    input.classList.add('input-error');
    correct.remove();
    input.after(error);
  }
}
