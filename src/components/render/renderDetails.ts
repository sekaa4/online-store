import { createElement } from '../elements/generateElement';
import { ConstantsDom } from '../../models/Dom';
import { DataProducts } from '../../interfaces/Data';
import Card from '../elements/CreateCard';
import { elementDomStorage } from '../elements/generateElement';
import history from '../../utils/history';

export function createDetails(data: DataProducts) {
  const divDetails: Card = new Card(ConstantsDom.DIV, data, {
    classes: [ConstantsDom.DETAILS_DIV],
  });
  const blockDetails: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: divDetails.elem,
    classes: [ConstantsDom.BLOCK_DETAILS],
  });
  const breadCrums: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: blockDetails,
    classes: [ConstantsDom.CRUMS_DETAILS],
  });
  const store: HTMLElement = createElement(ConstantsDom.P, HTMLElement, {
    parentElement: breadCrums,
    classes: [ConstantsDom.BREAD_CRUMS_A],
    text: 'Store',
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: breadCrums,
    classes: [ConstantsDom.BREAD_CRUMS],
    text: '>>',
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: breadCrums,
    classes: [ConstantsDom.BREAD_CRUMS_P_ONE],
    text: data.category,
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: breadCrums,
    classes: [ConstantsDom.BREAD_CRUMS],
    text: '>>',
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: breadCrums,
    classes: [ConstantsDom.BREAD_CRUMS_P_TWO],
    text: data.brand,
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: breadCrums,
    classes: [ConstantsDom.BREAD_CRUMS],
    text: '>>',
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: breadCrums,
    classes: [ConstantsDom.BREAD_CRUMS_P_TREE],
    text: data.title,
  });
  const titleDetails: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: blockDetails,
    classes: [ConstantsDom.TEST],
  });
  createElement(ConstantsDom.H2, HTMLElement, {
    parentElement: titleDetails,
    classes: [ConstantsDom.TITLE_DETAILS],
    text: data.title,
  });
  const productDetails: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: blockDetails,
    classes: [ConstantsDom.PRODUCT_DETAILS],
  });
  const photosDetails: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: productDetails,
    classes: [ConstantsDom.PHOTOS_DETAILS],
  });
  const photosColumn = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: photosDetails,
    classes: [ConstantsDom.PHOTOS_COLUMN_DETAILS],
  });
  const map = new Map();

  for (let i = 0; i < data.images.length; i++) {
    const url = data.images[i];
    const req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    const test = req.getResponseHeader('content-length');
    map.set(test, url);
  }
  const arr = Array.from(map.values());
  arr.forEach((element) => {
    createElement(ConstantsDom.IMG, HTMLElement, {
      parentElement: photosColumn,
      classes: [ConstantsDom.IMG_DETAILS],
      attributes: [
        [ConstantsDom.SRC, element],
        [ConstantsDom.ALT, ConstantsDom.ALT_DETAILS],
      ],
    });
  });
  const photosBasic = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: photosDetails,
    classes: [ConstantsDom.PHOTOS_BASIC_DETAILS],
  });

  const imgBasic = createElement(ConstantsDom.IMG, HTMLImageElement, {
    parentElement: photosBasic,
    classes: [ConstantsDom.IMG_BASIC_DETAILS],
    attributes: [
      [ConstantsDom.SRC, data.thumbnail],
      [ConstantsDom.ALT, ConstantsDom.ALT_DETAILS],
    ],
  });
  photosColumn.addEventListener('click', (e: Event) => {
    const img: HTMLImageElement = <HTMLImageElement>e.target;
    if (img.classList.contains('img-details')) {
      const colImages: HTMLCollection = photosColumn.children;
      const arrayImage = Array.from(colImages);
      arrayImage.forEach((element) => {
        element.classList.remove('active-details');
      });
      img.classList.add('active-details');
      const source: string = img.src;
      imgBasic.src = source;
    }
  });
  const descriptionDetails = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: productDetails,
    classes: [ConstantsDom.DESCRIPTION_DETAILS],
  });
  const descriptionDiv = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: descriptionDetails,
    classes: [ConstantsDom.DESCRIPTION_DIV],
  });
  const divRating: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: descriptionDiv,
    classes: [ConstantsDom.DETAILS_RATING_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divRating,
    classes: [ConstantsDom.DETAILS_RATING],
    text: `Rating: ${data.rating.toString()}`,
  });
  const divBrand: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: descriptionDiv,
    classes: [ConstantsDom.DETAILS_BRAND_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divBrand,
    classes: [ConstantsDom.DETAILS_BRAND],
    text: `Brand: ${data.brand.toString()}`,
  });
  const divCategory: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: descriptionDiv,
    classes: [ConstantsDom.DETAILS_CATEGORY_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divCategory,
    classes: [ConstantsDom.DETAILS_CATEGORY],
    text: `Category: ${data.category.toString()}`,
  });
  const divDescription: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: descriptionDiv,
    classes: [ConstantsDom.DETAILS_DESCRIPTION_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divDescription,
    classes: [ConstantsDom.DETAILS_DESCRIPTION],
    text: `Description: ${data.description.toString()}`,
  });
  const divStock: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: descriptionDiv,
    classes: [ConstantsDom.DETAILS_STOCK_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divStock,
    classes: [ConstantsDom.DETAILS_STOCK],
    text: `Stock: ${data.stock.toString()}`,
  });
  const buttonDetails = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: productDetails,
    classes: [ConstantsDom.BUTTON_DETAILS],
  });

  const buttonDiv = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: buttonDetails,
    classes: [ConstantsDom.BUTTON_DETAILS_DIV],
  });

  const divPrice: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: buttonDiv,
    classes: [ConstantsDom.DETAILS_PRICE_DIV],
  });
  createElement(ConstantsDom.P, HTMLElement, {
    parentElement: divPrice,
    classes: [ConstantsDom.DETAILS_PRICE],
    text: `Price: ${data.price.toString()} $`,
  });
  const divButton: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: buttonDiv,
    classes: [ConstantsDom.DETAILS_BUTTON_DIV],
  });
  createElement(ConstantsDom.BUTTON, HTMLElement, {
    parentElement: divButton,
    classes: [ConstantsDom.BUTTON_DETAILS_BUTTON, ConstantsDom.BUTTON_DETAILS_BORDER],
    text: ConstantsDom.BUY,
  });
  createElement(ConstantsDom.BUTTON, HTMLElement, {
    parentElement: divButton,
    classes: [ConstantsDom.BUTTON_DETAILS_BUTTON_ADD, ConstantsDom.BUTTON_DETAILS_BORDER_ADD],
    text: ConstantsDom.BUY_ADD,
  });

  store.addEventListener('click', () => {
    window.history.state.id += 1;
    const path = '/';
    window.history.pushState({ id: window.history.state.id, path: path }, '', path);

    history();
  });
  return divDetails;
}

export function renderDetails(data: DataProducts): Card {
  elementDomStorage.get(ConstantsDom.DIV);

  const card = createDetails(data);
  return card;
}
