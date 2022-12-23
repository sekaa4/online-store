import { ConstantsDom } from "../models/enumDom";

export function setToLocalStorage(key: string, value: string): void {
    if (key && value && typeof key === ConstantsDom.STRING && typeof value === ConstantsDom.STRING) {
        const storage = window.localStorage;
        storage.setItem(key, value);
    }
}
