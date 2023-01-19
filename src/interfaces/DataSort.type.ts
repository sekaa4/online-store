import { DataProducts } from './Data';

type SortsName = Array<keyof DataProducts>;
type KeysDataProducts = keyof DataProducts;
type SortData = {
  [index in KeysDataProducts]?: string[] | number[];
};
type AllDataSort = {
  [index in KeysDataProducts]?: Map<string, DataProducts[]>;
};

export { SortsName, KeysDataProducts, SortData, AllDataSort };
