import { renderHeader } from "./render/header";
import { renderMain } from "./render/main";

export function buildPage(): void {
    renderHeader();
    renderMain();
}
