import { getSortDataFilter } from './getSortDataFilter';
import { DataProducts } from '../../interfaces/Data';
import { SortsName, KeysDataProducts, SortData, AllDataSort } from '../../interfaces/DataSort.type';

export function getAllSortData(data: DataProducts[], sortsName: SortsName): AllDataSort {
  const sortData: SortData = getSortData(data, sortsName);
  const allDataSort: AllDataSort = Object.keys(sortData).reduce((acc, filterName) => {
    const cacheDataMap = new Map();
    sortData[filterName as KeysDataProducts]?.forEach((filter: string | number | string[]) => {
      data.forEach((product) => {
        if (cacheDataMap.has(filter) && product[filterName as KeysDataProducts] === filter) {
          cacheDataMap.get(filter).push(product);
        } else if (product[filterName as KeysDataProducts] === filter) {
          cacheDataMap.set(filter, []);
          cacheDataMap.get(filter).push(product);
        }
      });
    });
    return { ...acc, [filterName]: cacheDataMap };
  }, {});
  return allDataSort;
}

function getSortData(data: DataProducts[], sortsName: SortsName): SortData {
  const sortData: SortData = sortsName.reduce((acc, name) => {
    const arrData: (string | number | string[])[] = Array.from(getSortDataFilter(name, data));
    return { ...acc, [name]: arrData };
  }, {});

  return sortData;
}
