import { createElement } from "./generateElement";
import logo from "../../assets/logo/logo.png";
import { getFromLocalStorage } from '../controller/localStorage';
import { 
    WRAPPER,
    HEADER_WRAPPER,
    ALT,
    BASKET_ITEMS,
    BIN_CONTAINER,
    BIN_COUNTER,
    DIV,
    EMPTY,
    HEADER,
    IMG,
    LOGO,
    LOGO_CONTAINER,
    LOGO_IMG,
    P,
    SEPARATOR,
    SRC,
} from '../../models/constants';

export function renderHeader(): void {
    const header: HTMLElement = createElement(HEADER, document.body, [HEADER]);
    const wrapper: HTMLElement = createElement(DIV, header, [WRAPPER, HEADER_WRAPPER])
    const logoContainer: HTMLElement = createElement(DIV, wrapper, [LOGO_CONTAINER]);
    createElement(IMG, logoContainer, [LOGO_IMG], EMPTY, [
        [ALT, LOGO],
        [SRC, logo],
    ]);
    const shopBinContainer: HTMLElement = createElement(DIV, wrapper, [BIN_CONTAINER]);
    const basketItems = getFromLocalStorage(BASKET_ITEMS);
    let itemsNumber = 0;
    if (basketItems) {
        itemsNumber = basketItems.split(SEPARATOR).length;
    }
    createElement(P, shopBinContainer, [BIN_COUNTER], itemsNumber.toString());
}
