import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';
import { slider1Price, slider2Price, range1Price, range2Price } from './createMultiSlider';

export default function filterPrice(value: string): void {
  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');
  const [numberMin, numberMax] = value.split('↕');

  if (typeof +numberMin === 'number' && typeof +numberMax === 'number') {
    const newData: DataProducts[] = data.reduce((acc: DataProducts[], value: DataProducts) => {
      if (+numberMin <= value.price && value.price <= +numberMax) {
        acc.push(value);
        return acc;
      } else return acc;
    }, []);

    slider1Price.value = numberMin;
    slider2Price.value = numberMax;
    range1Price.textContent = `$${numberMin}`;
    range2Price.textContent = `$${numberMax}`;

    local.setItem(ConstantsDom.DATA_CURRENT, newData);
  }

  return;
}
