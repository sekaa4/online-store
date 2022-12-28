import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';
import getSortData from '../sortData/getSortData';

export default function sortHandler(url: URLSearchParams) {
  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');
  const sortName = url.get('sort');
  if (!sortName) {
    localStorage.removeItem(ConstantsDom.DATA_CURRENT);
    return;
  }

  local.setItem(ConstantsDom.DATA_CURRENT, getSortData(data, sortName));
}
