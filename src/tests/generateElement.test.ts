import { createElement } from '../components/elements/generateElement';

describe('test createElement function', () => {
  let newElement: HTMLDivElement;
  beforeEach(() => {
    newElement = createElement('div', HTMLDivElement, { text: 'newDiv', classes: ['new'] });
  });

  it('should create new element which will be an instance of class HTMLDivElement', () => {
    expect(newElement).toBeInstanceOf(HTMLDivElement);
  });

  it('should create new element which will be have textContent "newDiv" and contains class "new"', () => {
    expect(newElement.innerText).toEqual('newDiv');
    expect(newElement.classList.contains('new')).toBeTruthy();
  });
});
