import { ConstantsDom } from "../models/enumDom";

export function getFromLocalStorage(key: string): string {
    if (key && typeof key === ConstantsDom.STRING) {
        const storage = window.localStorage;
        return storage.getItem(key) || ConstantsDom.EMPTY;
    }
    return ConstantsDom.EMPTY;
}
