import { LocalStorage } from '../../utils/persistentStorage';
import { DataProducts } from '../../interfaces/Data';
import { ConstantsDom } from '../../models/Dom';
import filterCategory from '../filters/filterCategoty';
import filterBrand from '../filters/filterBrand';
import filterStock from '../filters/filterStock';
import filterPrice from '../filters/filterPrice';
import { AllDataSort } from '../../interfaces/DataSort.type';
import { getAllSortData } from '../sortData/getAllSortData';
import { controllerFilterElement } from '../filters/createAside';
import {
  slider1Price,
  slider2Price,
  range1Price,
  range2Price,
  slider1Stock,
  slider2Stock,
  range1Stock,
  range2Stock,
  sliderTrackPrice,
  sliderTrackStock,
} from '../filters/createMultiSlider';

let prevPrice: string | null;

export default function filterHandler(url: URLSearchParams): void {
  const valueCategory: string | null = url.get('category');
  const valueBrand: string | null = url.get('brand');
  const valuePrice: string | null = url.get('price');
  const valueStock: string | null = url.get('stock');

  if (valueCategory) {
    filterCategory(valueCategory);
  }

  if (valueBrand) {
    filterBrand(valueBrand);
  }

  if (valueStock) {
    filterStock(valueStock);
  }

  if (valuePrice) {
    filterPrice(valuePrice);
  }

  const local: LocalStorage = new LocalStorage();
  const data: DataProducts[] = local.getItem(ConstantsDom.DATA_CURRENT) || local.getItem('data');

  const categoryListElem: HTMLElement = <HTMLElement>document.querySelector('.category__list');
  const brandListElem: HTMLElement = <HTMLElement>document.querySelector('.brand__list');
  const checkboxLine: NodeListOf<HTMLElement> = controllerFilterElement.querySelectorAll('.checkbox__line');

  const sortObject: AllDataSort = getAllSortData(data, ['category', 'brand', 'price', 'stock']);
  const categories: Map<string, DataProducts[]> = <Map<string, DataProducts[]>>sortObject.category;
  const brands: Map<string, DataProducts[]> = <Map<string, DataProducts[]>>sortObject.brand;
  const priceList: Map<string, DataProducts[]> = <Map<string, DataProducts[]>>sortObject.price;
  const stockList: Map<string, DataProducts[]> = <Map<string, DataProducts[]>>sortObject.stock;
  const categoryArray: [string, DataProducts[]][] = Array.from(categories);
  const brandArray: [string, DataProducts[]][] = Array.from(brands);

  if (checkboxLine.length > 0) {
    checkboxLine.forEach((item) => {
      const span: HTMLSpanElement = <HTMLSpanElement>item.querySelector('.span__checkbox');
      item.classList.remove('item__active');
      item.classList.add('item__active_not');
      span.innerText = `(0/${span.dataset.count})`;
    });
  }

  categoryArray.forEach((category) => {
    const [categoryName, data] = category;
    const categoryLineElem: HTMLElement = <HTMLElement>categoryListElem.querySelector(`[data-name="${categoryName}"]`);
    const spanCount: HTMLSpanElement = <HTMLSpanElement>categoryLineElem.querySelector(`[data-id="${categoryName}"]`);
    categoryLineElem.classList.add('item__active');
    categoryLineElem.classList.remove('item__active_not');
    spanCount.innerText = `(${data.length}/${spanCount.dataset.count})`;
  });

  brandArray.forEach((brand) => {
    const [brandName, data] = brand;
    const brandElemLine: HTMLElement = <HTMLElement>brandListElem.querySelector(`[data-name="${brandName}"]`);
    const spanCount: HTMLSpanElement = <HTMLSpanElement>brandListElem.querySelector(`[data-id="${brandName}"]`);
    brandElemLine.classList.add('item__active');
    brandElemLine.classList.remove('item__active_not');
    spanCount.innerText = `(${data.length}/${spanCount.dataset.count})`;
  });

  const priceSort = Array.from(priceList.keys())
    .map((price) => +price)
    .sort((a: number, b: number) => +a - +b);

  const stockSort = Array.from(stockList.keys())
    .map((stock) => +stock)
    .sort((a: number, b: number) => +a - +b);

  const sliderMaxValuePrice: number = +slider1Price.max;
  const sliderMaxValueStock: number = +slider1Stock.max;

  if (!valuePrice === !prevPrice) {
    range1Price.innerText = `$${slider1Price.value}`;
    range2Price.innerText = `$${slider2Price.value}`;
    slider1Price.value = Math.min(...priceSort).toString();
    slider2Price.value = Math.max(...priceSort).toString();

    slider1Stock.value = Math.min(...stockSort).toString();
    slider2Stock.value = Math.max(...stockSort).toString();
    range1Stock.innerText = `${slider1Stock.value}`;
    range2Stock.innerText = `${slider2Stock.value}`;
  } else if (prevPrice !== valuePrice) {
    range1Price.innerText = `$${slider1Price.value}`;
    range2Price.innerText = `$${slider2Price.value}`;
    slider1Price.value = Math.min(...priceSort).toString();
    slider2Price.value = Math.max(...priceSort).toString();

    range1Stock.innerText = `${slider1Stock.value}`;
    range2Stock.innerText = `${slider2Stock.value}`;
    slider1Stock.value = Math.min(...stockSort).toString();
    slider2Stock.value = Math.max(...stockSort).toString();

    prevPrice = valuePrice;
  } else {
    slider1Price.value = Math.min(...priceSort).toString();
    slider2Price.value = Math.max(...priceSort).toString();
    range1Price.innerText = `$${slider1Price.value}`;
    range2Price.innerText = `$${slider2Price.value}`;

    range1Stock.innerText = `${slider1Stock.value}`;
    range2Stock.innerText = `${slider2Stock.value}`;
    slider1Stock.value = Math.min(...stockSort).toString();
    slider2Stock.value = Math.max(...stockSort).toString();

    prevPrice = valuePrice;
  }

  const percent1Price = (parseInt(slider1Price.value) / sliderMaxValuePrice) * 100;
  const percent2Price = (parseInt(slider2Price.value) / sliderMaxValuePrice) * 100;

  sliderTrackPrice.style.background = `linear-gradient(to right, #dadae5 ${percent1Price}% , #3264fe ${percent1Price}% , #3264fe ${percent2Price}%, #dadae5 ${percent2Price}%)`;

  const percent1Stock = (parseInt(slider1Stock.value) / sliderMaxValueStock) * 100;
  const percent2Stock = (parseInt(slider2Stock.value) / sliderMaxValueStock) * 100;

  sliderTrackStock.style.background = `linear-gradient(to right, #dadae5 ${percent1Stock}% , #3264fe ${percent1Stock}% , #3264fe ${percent2Stock}%, #dadae5 ${percent2Stock}%)`;

  return;
}
