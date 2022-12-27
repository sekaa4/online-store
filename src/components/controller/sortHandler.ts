import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';
import getSortData from '../sortData/getSortData';

export default function sortHandler(url: URLSearchParams) {
  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem('dataCurrent') || local.getItem('data');
  const sortName = url.get('sort');
  const optionsArr: NodeListOf<HTMLOptionElement> = document.querySelectorAll('.select__option');
  if (!sortName) {
    localStorage.removeItem('dataCurrent');
    return;
  }

  switch (sortName) {
    case ConstantsDom.PRICE_ASC:
      local.setItem('dataCurrent', getSortData(data, ConstantsDom.PRICE_ASC));
      optionsArr[1].selected = true;
      break;
    case ConstantsDom.PRICE_DESC:
      local.setItem('dataCurrent', getSortData(data, ConstantsDom.PRICE_DESC));
      optionsArr[2].selected = true;
      break;
    case ConstantsDom.RATING_ASC:
      local.setItem('dataCurrent', getSortData(data, ConstantsDom.RATING_ASC));
      optionsArr[3].selected = true;
      break;
    case ConstantsDom.RATING_DESC:
      local.setItem('dataCurrent', getSortData(data, ConstantsDom.RATING_DESC));
      optionsArr[4].selected = true;
      break;
  }
}
