import { createElement } from './generateElement';
import { ArrgsElement } from '../../interfaces/ArrgsElement';

export default class CreateElement {
  public readonly elem: HTMLElement;
  constructor(name: string, paramsObject?: ArrgsElement) {
    this.elem = createElement(name, HTMLElement, paramsObject);
  }
  appendElem(elementName: string | CreateElement, className?: string[] | string, text?: string): void {
    if (typeof elementName === 'string') {
      const elem: HTMLElement = document.createElement(elementName);
      if (this.elem instanceof HTMLElement) {
        if (className) {
          typeof className === 'string' ? elem.classList.add(className) : elem.classList.add(...className);
        }
        elem.innerHTML = text ? text : '';
        this.elem.append(elem);
      }
    } else {
      if (this.elem instanceof HTMLElement) {
        if (elementName instanceof CreateElement && className) {
          typeof className === 'string'
            ? elementName.elem.classList.add(className)
            : elementName.elem.classList.add(...className);
          elementName.elem.innerHTML = text ? text : '';
        }
      }
      this.elem.append(elementName.elem);
    }
  }
  removeElem(className: string[]) {
    if (this instanceof HTMLElement) {
      this.querySelector(`.${className.join('.')}`)?.remove();
    }
  }

  chooseElem<T extends typeof Element>(className: string | string[]) {
    if (this.elem instanceof HTMLElement) {
      if (className && typeof className === 'string') {
        const elem: Element | null = this.elem.querySelector(`.${className}`);
        if (elem) return elem as InstanceType<T>;
        else throw new Error("Element doesn't exist in DOM");
      } else if (className && Array.isArray(className)) {
        const elem: Element | null = this.elem.querySelector(`.${className.join('.')}`);
        if (elem) return elem as InstanceType<T>;
        else throw new Error("Element doesn't exist in DOM");
      } else throw new Error("className is wrong or doesn't exist");
    } else throw new Error("Element doesn't instanceof HTMLElement");
  }
}
