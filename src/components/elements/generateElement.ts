import { ConstantsDom } from '../../models/Dom';
import { CreateElementParams } from '../../interfaces/CreateElementParams';

export const elementDomStorage = new Map<string, HTMLElement[]>();

export function addToDOMStorage(element: HTMLElement): void {
  if (element && element.classList) {
    element.classList.forEach((cls) => {
      if (elementDomStorage.has(cls)) {
        elementDomStorage.get(cls)?.push(element);
      } else {
        elementDomStorage.set(cls, [element]);
      }
    });
  }
}

export function createElement<T extends typeof HTMLElement>(
  elemName: string,
  type: T,
  { parentElement, classes, text = '', attributes }: CreateElementParams = {}
): InstanceType<T> {
  if (elemName && typeof elemName === ConstantsDom.STRING) {
    const element: HTMLElement = document.createElement(elemName);
    if (classes && element instanceof HTMLElement) {
      element.classList.add(...classes);
      element.innerText = text;
    }
    if (attributes) {
      for (let i = 0; i < attributes.length; i++) {
        element.setAttribute(...attributes[i]);
      }
    }
    if (parentElement && parentElement instanceof HTMLElement) parentElement.append(element);
    addToDOMStorage(element);
    return element as InstanceType<T>;
  }
  throw new Error('Error, please check the correctness of the entered data');
}
