import { validateAddress } from '../components/validate-data/validateAddress';

describe('check validateAddress function if valid value', () => {
  let input: HTMLInputElement;

  beforeEach(() => {
    input = document.createElement('input');
    input.value = 'aaaaaaa aaaaaaa aaaaaaa';
    input.classList.add('input-error');
    document.body.append(input);
    validateAddress(input);
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
