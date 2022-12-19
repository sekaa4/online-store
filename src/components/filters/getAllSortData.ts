import { getSortDataFilter } from './getSortDataFilter';
import { DataObject } from '../../interfaces/dataObject';
import { DataProducts } from '../../interfaces/dataObject';

export function getAllSortData(data: DataObject, sortsName: string[]) {
  const sortData = getSortData(data, sortsName);
  const allDataSort = Object.keys(sortData).reduce((acc, filterName) => {
    const cacheDataMap = new Map();
    sortData[filterName].forEach((filter: string | number | string[]) => {
      data.products.forEach((product) => {
        if (cacheDataMap.has(filter) && product[filterName] === filter) {
          cacheDataMap.get(filter).push(product);
        } else if (product[filterName] === filter) {
          cacheDataMap.set(filter, []);
          cacheDataMap.get(filter).push(product);
        }
      });
    });
    return { ...acc, [filterName]: cacheDataMap };
  }, {});
  return allDataSort;
}

function getSortData(data: DataObject, sortsName: string[]) {
  const sortData: object = sortsName.reduce((acc, name) => {
    const arrData = Array.from(getSortDataFilter(name, data));
    return { ...acc, [name]: arrData };
  }, {});

  return sortData;
}
