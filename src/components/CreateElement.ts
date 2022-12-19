export default class CreateElement {
  public readonly elem: HTMLElement;
  constructor(name: string, className?: string | string[]) {
    if (typeof className === 'string' && className) {
      this.elem = document.createElement(name);
      this.elem.classList.add(className);
    } else if (Array.isArray(className) && className) {
      this.elem = document.createElement(name);
      this.elem.classList.add(...className);
    } else {
      this.elem = document.createElement(name);
    }
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
  removeElem(className: string) {
    if (this instanceof HTMLElement) {
      this.querySelector(`.${className}`)?.remove();
    }
  }
  chooseElem(className: string | string[]) {
    if (this.elem instanceof HTMLElement) {
      if (className) {
        return typeof className === 'string'
          ? this.elem.querySelector(`.${className}`)
          : this.elem.querySelector(`.${className.join('.')}`);
      } else {
        throw new Error("className doesn't exist");
      }
    }
  }
}
