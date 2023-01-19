import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';

export default function filterStock(value: string): void {
  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');
  const [numberMin, numberMax] = value.split('↕');

  if (typeof +numberMin === 'number' && typeof +numberMax === 'number') {
    const newData: DataProducts[] = data.reduce((acc: DataProducts[], value: DataProducts) => {
      if (+numberMin <= value.stock && value.stock <= +numberMax) {
        acc.push(value);
        return acc;
      } else return acc;
    }, []);

    local.setItem(ConstantsDom.DATA_CURRENT, newData);
  }

  return;
}
