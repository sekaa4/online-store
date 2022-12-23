export interface PersistentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: object | object[] | string | string[] | number | boolean): void;
}
