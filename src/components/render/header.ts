import { createElement } from "./generateElement";
import logo from "../../assets/logo/logo.png";
import { 
    WRAPPER,
    HEADER_WRAPPER,
    ALT,
    BASKET_CONTAINER,
    BASKET_COUNTER,
    DIV,
    EMPTY,
    HEADER,
    IMG,
    LOGO,
    LOGO_CONTAINER,
    LOGO_IMG,
    P,
    SRC
} from '../../models/constants';

export function renderHeader(): void {
    const header: HTMLElement = createElement(HEADER, document.body, [HEADER]);
    const wrapper: HTMLElement = createElement(DIV, header, [WRAPPER, HEADER_WRAPPER])
    const logoContainer: HTMLElement = createElement(DIV, wrapper, [LOGO_CONTAINER]);
    createElement(IMG, logoContainer, [LOGO_IMG], EMPTY, [
        [ALT, LOGO],
        [SRC, logo],
    ]);
    const shopBasketContainer: HTMLElement = createElement(DIV, wrapper, [BASKET_CONTAINER]);
    let number = 0;
    createElement(P, shopBasketContainer, [BASKET_COUNTER], number.toString());
}
