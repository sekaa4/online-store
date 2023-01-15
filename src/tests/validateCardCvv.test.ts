import { validateCardCvv } from '../components/validate-data/validateCardCvv';

describe('check validateCardCvv if valid value', () => {
  let input: HTMLInputElement;
  let creditCard: HTMLElement;

  beforeEach(() => {
    input = document.createElement('input');
    input.value = '123';
    input.classList.add('input-error');
    creditCard = document.createElement('div');
    document.body.append(creditCard);
    validateCardCvv(input, creditCard);
  });

  afterEach(() => {
    document.body.innerText = '';
  });

  it('should delete class "input-error"', () => {
    expect(input.classList.contains('input-error')).toBeFalsy();
  });

  it('should add elem correct', () => {
    expect(document.body.querySelector('.modal-correct')).toBeTruthy();
  });
});
