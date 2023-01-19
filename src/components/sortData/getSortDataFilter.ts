import { DataProducts } from '../../interfaces/Data';
import { KeysDataProducts } from '../../interfaces/DataSort.type';

const cacheSort = new Map();

export function getSortDataFilter(filterName: KeysDataProducts, data: DataProducts[]): Set<string | number | string[]> {
  if (cacheSort.has(filterName)) {
    return cacheSort.get(filterName);
  } else {
    const dataSort: Set<string | number | string[]> = data.reduce(
      (acc: Set<string | number | string[]>, item: DataProducts) => {
        return acc.add(item[filterName]);
      },
      new Set()
    );
    cacheSort.set(filterName, dataSort);
    return dataSort;
  }
}
