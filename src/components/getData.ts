import { DataObject } from '../interfaces/Data';

export default async function getData(): Promise<DataObject> {
  const data: DataObject = await fetch('https://dummyjson.com/products').then((resp) => resp.json());
  localStorage.setItem('data', JSON.stringify(data.products));
  return data;
}
