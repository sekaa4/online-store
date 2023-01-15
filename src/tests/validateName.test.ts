import { validateName } from '../components/validate-data/validateName';

describe('check validateName function if valid value', () => {
  let input: HTMLInputElement;

  beforeEach(() => {
    input = document.createElement('input');
    input.value = 'Aaa Aaa';
    input.classList.add('input-error');
    document.body.append(input);
    validateName(input);
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
