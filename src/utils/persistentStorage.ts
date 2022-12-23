import { PersistentStorage } from '../interfaces/LocalStorage';

class LocalStorage implements PersistentStorage {
  getItem(key: string) {
    const item = localStorage.getItem(key);

    if (item === null) return undefined;

    if (item === 'null') return null;
    if (item === 'undefined') return undefined;

    try {
      return JSON.parse(item);
    } catch (err) {
      console.log('Error, there may be something wrong with the data format');
    }

    return item;
  }
  setItem(key: string, value: object | object[] | string | string[] | number | boolean) {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}

export const persistentStorage = new LocalStorage();
