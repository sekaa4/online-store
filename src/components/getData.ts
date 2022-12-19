import { DataObject } from '../interfaces/dataObject';
import products from '../data.json' assert {type: 'json'}; // доступ модуль

export function getData(): DataObject[] {
  return products.products;
}

console.log(getData());
export default getData;
