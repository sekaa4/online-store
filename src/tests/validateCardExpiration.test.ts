import { validateCardExpiration } from '../components/validate-data/validateCardExpiration';

describe('check validateCardExpiration function if valid value', () => {
  let input: HTMLInputElement;
  let creditCard: HTMLElement;

  beforeEach(() => {
    input = document.createElement('input');
    input.value = '01/23';
    input.classList.add('input-error');
    creditCard = document.createElement('div');
    document.body.append(creditCard);
    validateCardExpiration(input, creditCard);
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
