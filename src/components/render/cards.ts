import { ConstantsDom } from "../../models/enumDom";
import { DataObject, DataProducts } from "../../interfaces/dataObject";
import { addToDOMStorage, createElement, elementDomStorage } from "./generateElement";



function createCard(data: DataProducts): HTMLElement {
    const container = document.createElement(ConstantsDom.DIV);
    container.classList.add(ConstantsDom.CARD_CONTAINER);
    addToDOMStorage(container);
    createElement(ConstantsDom.H3, HTMLElement, {
        parentElement: container,
        classes: [ConstantsDom.CARD_NAME],
        text: data.title,
    });
    require(`../../assets/img/${data.thumbnail}`);
    createElement(ConstantsDom.IMG, HTMLElement, {
        parentElement: container,
        classes: [ConstantsDom.CARD_IMG],
        attributes: [
            [ConstantsDom.SRC, `./assets/img/${data.thumbnail}`],
          ],
    });
    return container;
}

export function renderCards(data: DataObject): void {
    const parentElement = elementDomStorage.get(ConstantsDom.CARD_CONTAINER);
    parentElement?.forEach((element) => {
        element.innerHTML = '';
        if (!data.products.length) {
            emptyData(element);
        }
        data.products.forEach((card) => element.append(createCard(card)))
    });
}

function emptyData(parentElement: HTMLElement): void {
    createElement(ConstantsDom.H1, HTMLElement, {
        parentElement: parentElement,
        classes: [ConstantsDom.ATTENTION],
        text: ConstantsDom.SORRY_NO_PRODUCTS,
    });
}
