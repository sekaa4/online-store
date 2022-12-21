import { DataProducts, DataObject } from '../../interfaces/dataObject';
import { KeysDataProducts } from '../../interfaces/sortData.type';

const cacheSort = new Map();

export function getSortDataFilter(filterName: KeysDataProducts, data: DataObject): Set<string | number | string[]> {
  if (cacheSort.has(filterName)) {
    return cacheSort.get(filterName);
  } else {
    const dataSort: Set<string | number | string[]> = data.products.reduce(
      (acc: Set<string | number | string[]>, item: DataProducts) => {
        return acc.add(item[filterName]);
      },
      new Set()
    );
    cacheSort.set(filterName, dataSort);
    return dataSort;
  }
}
