import { DataProducts } from './Data';

export interface ControllerSortElements {
  sortPriceASC(data: DataProducts[]): void;
  sortPriceDESC(data: DataProducts[]): void;
  sortRatingASC(data: DataProducts[]): void;
  sortRatingDESC(data: DataProducts[]): void;
}
