import CreateElement from '../CreateElement';

export default function createFilter(name: string, data: [string, string[] | number[]][]) {
  const filter = new CreateElement('div', `${name.toLowerCase()}__list`);

  if (data.length > 0) {
    data.forEach((item) => {
      const checkboxLine: CreateElement = new CreateElement('div', ['checkbox__line', 'item__active']);
      const label: CreateElement = new CreateElement('label', ['label', 'label__checkbox']);
      const input: CreateElement = new CreateElement('input', ['input', 'input__checkbox']);
      const span: CreateElement = new CreateElement('span', ['span', 'span__checkbox']);
      if (typeof item[0] === 'string') {
        if (input.elem instanceof HTMLInputElement) {
          input.elem.type = 'checkbox';
          input.elem.id = item[0];
        }
        if (label.elem instanceof HTMLLabelElement) {
          label.elem.htmlFor = item[0];
          label.elem.innerHTML = item[0];
        }
      }
      if (Array.isArray(item[1])) span.elem.innerHTML = `(${item[1].length}/${item[1].length})`;

      checkboxLine.elem.append(input.elem, label.elem, span.elem);
      filter.elem.append(checkboxLine.elem);
    });
  } else throw new Error('Data in createFunction is empty');

  return filter;
}
