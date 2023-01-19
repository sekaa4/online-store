import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';
import getSortData from '../sortData/getSortData';

export default function sortHandler(url: URLSearchParams): void {
  const sortName: string | null = url.get('sort');
  if (!sortName) {
    const optionsArr: NodeListOf<HTMLOptionElement> = document.querySelectorAll('.select__option');
    const [selectName]: HTMLOptionElement[] = Array.from(optionsArr);
    selectName.selected = true;
    return;
  }

  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');

  local.setItem(ConstantsDom.DATA_CURRENT, getSortData(data, sortName));
}
