import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';

export default function getSortData(data: DataProducts[], sortName: string): DataProducts[] {
  const optionsArr: NodeListOf<HTMLOptionElement> = document.querySelectorAll('.select__option');
  const [selectName, priceAsc, priceDesc, ratingAsc, ratingDesc]: HTMLOptionElement[] = Array.from(optionsArr);
  switch (sortName) {
    case ConstantsDom.PRICE_ASC:
      priceAsc.selected = true;
      return data.sort((a, b) => a['price'] - b['price']);
    case ConstantsDom.PRICE_DESC:
      priceDesc.selected = true;
      return data.sort((a, b) => b['price'] - a['price']);
    case ConstantsDom.RATING_ASC:
      ratingAsc.selected = true;
      return data.sort((a, b) => a['rating'] - b['rating']);
    case ConstantsDom.RATING_DESC:
      ratingDesc.selected = true;
      return data.sort((a, b) => b['rating'] - a['rating']);
    default:
      selectName.selected = true;
      return data;
  }
}
