export interface ControllerFilterElements {
  start(): void;
  searchCheckbox(items: NodeListOf<HTMLElement>): HTMLElement | undefined;
  filterItems(filterName: string, subName: string): void;
}
