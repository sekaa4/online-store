import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';
import { SortName } from '../../interfaces/SortName.type';

export default function getSortData(data: DataProducts[], sortName: SortName): DataProducts[] {
  switch (sortName) {
    case ConstantsDom.PRICE_ASC:
      return data.sort((a, b) => (a['price'] > b['price'] ? 1 : -1));
    case ConstantsDom.PRICE_DESC:
      return data.sort((a, b) => (a['price'] < b['price'] ? 1 : -1));
    case ConstantsDom.RATING_ASC:
      return data.sort((a, b) => (a['rating'] > b['rating'] ? 1 : -1));
    case ConstantsDom.RATING_DESC:
      return data.sort((a, b) => (a['rating'] < b['rating'] ? 1 : -1));
  }
}
