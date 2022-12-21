import { getSortDataFilter } from './getSortDataFilter';
import { DataObject } from '../../interfaces/Data';
import { SortsName, KeysDataProducts, SortData, AllDataSort } from '../../interfaces/SortData.type';

export function getAllSortData(data: DataObject, sortsName: SortsName): AllDataSort {
  const sortData: SortData = getSortData(data, sortsName);
  const allDataSort: AllDataSort = Object.keys(sortData).reduce((acc, filterName) => {
    const cacheDataMap = new Map();
    sortData[filterName as KeysDataProducts]?.forEach((filter: string | number | string[]) => {
      data.products.forEach((product) => {
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

function getSortData(data: DataObject, sortsName: SortsName): SortData {
  const sortData: SortData = sortsName.reduce((acc, name) => {
    const arrData: (string | number | string[])[] = Array.from(getSortDataFilter(name, data));
    console.log({ ...acc, [name]: arrData });
    return { ...acc, [name]: arrData };
  }, {});

  return sortData;
}
