import { validateCardNumber } from '../components/validate-data/validateCardNumber';

describe('check validateCardNumber function if valid value', () => {
  let input: HTMLInputElement;
  let creditCard: HTMLElement;

  beforeEach(() => {
    input = document.createElement('input');
    input.value = '5555    5555    5555    5555';
    input.classList.add('input-error');
    creditCard = document.createElement('div');
    document.body.append(creditCard);
    validateCardNumber(input, creditCard);
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
