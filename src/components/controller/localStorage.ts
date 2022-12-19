import { 
    STRING,
    EMPTY,
} from '../../models/constants';

export function saveToLocalStorage(key: string, value: string): void {
    if (key && value && typeof key === STRING && typeof value === STRING) {
        const storage = window.localStorage;
        storage.setItem(key, value);
    }
}

export function getFromLocalStorage(key: string): string {
    if (key && typeof key === STRING) {
        const storage = window.localStorage;
        return storage.getItem(key) || EMPTY;
    }
    return EMPTY;
}
