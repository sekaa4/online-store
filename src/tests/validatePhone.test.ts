import { validatePhone } from '../components/validate-data/validatePhone';

describe('check validatePhone function if valid value', () => {
  let input: HTMLInputElement;

  beforeEach(() => {
    input = document.createElement('input');
    input.value = '+375441244456';
    input.classList.add('input-error');
    document.body.append(input);
    validatePhone(input);
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
