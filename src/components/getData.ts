import { DataObject } from '../interfaces/Data';
import { LocalStorage } from '../utils/persistentStorage';


export default async function getData(): Promise<DataObject> {
  const data: DataObject = await fetch('https://dummyjson.com/products').then((resp) => resp.json());
  const products = data.products;
  const persistentStorage = new LocalStorage();
  persistentStorage.setItem('data', products);
  return data;
}
