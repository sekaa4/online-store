import { SortName } from './SortName.type';

export interface ControllerSortElements {
  start(): void;
  sortItems(param: SortName): void;
}
