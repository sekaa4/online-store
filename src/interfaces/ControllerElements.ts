export interface ControllerElements {
  start(): void;
  activeList(currentTarget: HTMLElement, target: HTMLElement): void;
  activeTable(currentTarget: HTMLElement, target: HTMLElement): void;
}
