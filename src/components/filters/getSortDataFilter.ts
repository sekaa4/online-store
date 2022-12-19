import { DataProducts, DataObject } from '../../interfaces/dataObject';

const cacheSort = new Map();

type keys = keyof DataProducts;

export function getSortDataFilter(filterName: keys, data: DataObject) {
  if (cacheSort.has(filterName)) {
    return cacheSort.get(filterName);
  } else {
    const dataSort = data.products.reduce((acc: Set<keys>, item: DataProducts) => {
      return acc.add(item[filterName]);
    }, new Set());
    cacheSort.set(filterName, dataSort);
    return dataSort;
  }
}
