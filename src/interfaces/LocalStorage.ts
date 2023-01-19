import { ValueStorage } from './LocalStorage.type';

export interface PersistentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: ValueStorage): void;
}
