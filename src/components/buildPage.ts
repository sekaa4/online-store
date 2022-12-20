import { renderHeader } from "./render/header";
import { renderMain } from "./render/main";
import { renderFooter } from "./render/footer";

export function buildPage(): void {
    renderHeader();
    renderMain();
    renderFooter();
}
