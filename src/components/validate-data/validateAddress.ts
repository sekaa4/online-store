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

export function validateAddress(input: HTMLInputElement) {
  const value: string = input.value;
  if (/[a-zA-Z]{5,}(\s[a-zA-Z]{5,})(\s[a-zA-Z]{5,})+/.test(value)) {
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
