export interface ControllerSearchElements {
  start(): void;
  searchItems(name: 'search', param: string): void;
}
