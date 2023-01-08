import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';

export default function filterCategory(value: string): void {
  const params = value.split('↕');
  const categoryListElem: HTMLElement = <HTMLElement>document.querySelector('.category__list');

  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');
  const newData: DataProducts[] = params.reduce((acc: DataProducts[], value: string) => {
    const categoryElemInput: HTMLInputElement = <HTMLInputElement>categoryListElem.querySelector(`[id="${value}"]`);
    if (categoryElemInput) {
      categoryElemInput.checked = true;
    }

    data.forEach((dataProduct) => {
      dataProduct.category === value ? acc.push(dataProduct) : 'false';
    });
    return [...acc];
  }, []);

  local.setItem(ConstantsDom.DATA_CURRENT, newData);

  return;
}
