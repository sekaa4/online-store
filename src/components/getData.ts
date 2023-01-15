import { DataObject } from '../interfaces/Data';
import { LocalStorage } from '../utils/persistentStorage';
import { ConstantsDom } from '../models/Dom';

export default async function getData(): Promise<DataObject> {
  const resp: Response = await fetch('https://dummyjson.com/products');
  const data: DataObject = await resp.json();
  const products = data.products;
  const persistentStorage = new LocalStorage();
  persistentStorage.setItem('data', products);
  persistentStorage.setItem(ConstantsDom.DATA_CURRENT, products);
  return data;
}
