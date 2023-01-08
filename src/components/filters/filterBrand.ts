import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';

export default function filterBrand(value: string): void {
  const params = value.split('↕');
  const brandListElem: HTMLElement = <HTMLElement>document.querySelector('.brand__list');

  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');
  const newData: DataProducts[] = params.reduce((acc: DataProducts[], value: string) => {
    const brandElemInput: HTMLInputElement = <HTMLInputElement>brandListElem.querySelector(`[id="${value}"]`);
    if (brandElemInput) {
      brandElemInput.checked = true;
    }

    data.forEach((dataProduct) => {
      dataProduct.brand === value ? acc.push(dataProduct) : 'false';
    });
    return acc;
  }, []);
  local.setItem(ConstantsDom.DATA_CURRENT, newData);
  return;
}
