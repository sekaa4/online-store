import CreateElement from '../components/elements/CreateElement';

describe('check instance of class CreateElement', () => {
  let elem: CreateElement;
  beforeEach(() => {
    elem = new CreateElement('div');
  });

  it('new element should instanceof CreateElement', () => {
    expect(elem).toBeInstanceOf(CreateElement);
  });

  it('new element must pass appendElem method', () => {
    expect(elem.appendElem).toBeDefined();
  });

  it('new element must pass removeElem method', () => {
    expect(elem.removeElem).toBeDefined();
  });

  it('new element must pass chooseElem method', () => {
    expect(elem.chooseElem).toBeDefined();
  });
});
