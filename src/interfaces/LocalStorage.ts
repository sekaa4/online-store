export interface PersistentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: object | string | number | boolean | (object | string | number | boolean)[]): void;
}
