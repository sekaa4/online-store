import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';
import { inputSearch } from '../sort-products/createSearchBar';
import { stateElem } from '../sort-products/createState';
import { imageSearch } from '../sort-products/createSearchBar';

export default function searchHandler(url: URLSearchParams): void {
  const searchValue = url.get('search');
  if (!searchValue) {
    imageSearch.classList.remove('active__image');
    imageSearch.classList.remove('focus__image');
    return;
  }
  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');

  if (searchValue) {
    const newData = data.filter((dataItem) => {
      const valuesData = Object.entries(dataItem);
      for (const [key, value] of valuesData) {
        if (key === 'id' || key === 'images' || key === 'thumbnail') continue;
        const reg = new RegExp(`${searchValue}`, 'gi');
        if (reg.test(value.toString())) {
          return true;
        } else continue;
      }
    });

    inputSearch.value = searchValue;
    stateElem.textContent = newData.length.toString();
    local.setItem(ConstantsDom.DATA_CURRENT, newData);
  }
  return;
}
