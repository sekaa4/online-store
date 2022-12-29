import CreateElement from '../elements/CreateElement';
import { DataProducts } from '../../interfaces/Data';

export default function createFilter(name: string, data: [string, DataProducts[]][]) {
  const filter = new CreateElement('div', {
    classes: [`${name.toLowerCase()}__list`],
  });

  if (data.length > 0) {
    data.forEach((item) => {
      const [nameData, dataArray] = item;
      const checkboxLine: CreateElement = new CreateElement('div', {
        classes: ['checkbox__line', 'item__active'],
        attributes: [['data-name', `${nameData}`]],
      });
      const label: CreateElement = new CreateElement('label', {
        classes: ['label', 'label__checkbox'],
      });
      const input: CreateElement = new CreateElement('input', {
        classes: ['input', 'input__checkbox'],
      });
      const span: CreateElement = new CreateElement('span', {
        classes: ['span', 'span__checkbox'],
        attributes: [['data-count', `${dataArray.length}`]],
      });
      if (typeof nameData === 'string') {
        if (input.elem instanceof HTMLInputElement && name === 'Category') {
          input.elem.type = 'checkbox';
          input.elem.id = nameData;
          input.elem.setAttribute('data-count', `${dataArray.length}`);
        }
        if (input.elem instanceof HTMLInputElement && name === 'Brand') {
          input.elem.type = 'checkbox';
          input.elem.id = nameData;
          input.elem.setAttribute('data-category', `${dataArray[0].category}`);
        }
        if (label.elem instanceof HTMLLabelElement) {
          label.elem.htmlFor = nameData;
          label.elem.innerHTML = nameData;
        }
      }
      if (Array.isArray(dataArray)) span.elem.innerHTML = `(${dataArray.length}/${dataArray.length})`;

      checkboxLine.elem.append(input.elem, label.elem, span.elem);
      filter.elem.append(checkboxLine.elem);
    });
  } else throw new Error('Data in createFunction is empty');

  return filter;
}
