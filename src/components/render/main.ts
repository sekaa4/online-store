import { createElement } from "./generateElement";
import { 
    DIV,
    WRAPPER,
    MAIN_WRAPPER,
    FILTER_CONTAINER,
    ITEMS_CONTAINER,
    MAIN    
} from '../../models/constants';

export function renderMain(): void {
    const main: HTMLElement = createElement(MAIN, document.body, [MAIN]);
    const wrapper: HTMLElement = createElement(DIV, main, [WRAPPER, MAIN_WRAPPER])
    createElement(DIV, wrapper, [FILTER_CONTAINER]);
    createElement(DIV, wrapper, [ITEMS_CONTAINER]);
}
