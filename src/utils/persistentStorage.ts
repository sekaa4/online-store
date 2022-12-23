import { PersistentStorage } from '../interfaces/LocalStorage';

export class LocalStorage implements PersistentStorage {
  getItem(key: string) {
    const item = localStorage.getItem(key);

    if (item === null || item === 'undefined') return undefined;

    try {
      return JSON.parse(item);
    } catch (err) {
      console.log('Error, there may be something wrong with the data format');
    }

    return item;
  }
  setItem(key: string, value: object | string | number | boolean | (object | string | number | boolean)[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
