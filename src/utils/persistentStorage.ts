import { PersistentStorage } from '../interfaces/LocalStorage';
import { ValueStorage } from '../interfaces/LocalStorage.type';

export class LocalStorage implements PersistentStorage {
  getItem(key: string) {
    const item = localStorage.getItem(key);

    if (item === null || item === 'undefined') return undefined;

    try {
      return JSON.parse(item);
    } catch (err) {
      console.log('Error. There may be something wrong with the data format');
    }

    return item;
  }

  setItem(key: string, value: ValueStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
