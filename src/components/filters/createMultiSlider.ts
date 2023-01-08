import CreateElement from '../elements/CreateElement';
import { createElement } from '../elements/generateElement';
import { allSortData } from '../sortData/getAllSortData';
import { DataProducts } from '../../interfaces/Data';

export let slider1Price: HTMLInputElement;
export let slider2Price: HTMLInputElement;
export let range1Price: HTMLSpanElement;
export let range2Price: HTMLSpanElement;
export let slider1Stock: HTMLInputElement;
export let slider2Stock: HTMLInputElement;
export let range1Stock: HTMLSpanElement;
export let range2Stock: HTMLSpanElement;
export let sliderTrackPrice: HTMLElement;
export let sliderTrackStock: HTMLElement;

export function createMultiSlider(name: string): HTMLElement[] {
  const description: HTMLHeadingElement = createElement('h3', HTMLHeadingElement, {
    classes: ['dual-slider__description'],
    text: name,
  });
  const slider: HTMLDivElement = createElement('div', HTMLDivElement, {});
  const values: CreateElement = new CreateElement('div', {
    classes: ['out-data', `out-data__${name.toLowerCase()}`],
  });
  const prices: Map<string, DataProducts[]> = <Map<string, DataProducts[]>>allSortData.price;
  const stocks: Map<string, DataProducts[]> = <Map<string, DataProducts[]>>allSortData.stock;

  const priceSort = Array.from(prices.keys())
    .map((price) => +price)
    .sort((a: number, b: number) => +a - +b);
  const stockSort = Array.from(stocks.keys())
    .map((stock) => +stock)
    .sort((a: number, b: number) => +a - +b);

  values.appendElem('span', 'from-data', '0');
  values.appendElem('span', 'dash', '—');
  values.appendElem('span', 'to-data', '0');

  const inputs: CreateElement = new CreateElement('div', {
    classes: ['multi-range', 'multi-range__container'],
  });
  inputs.appendElem('div', 'slider-track');
  inputs.appendElem('input', 'slider1');
  inputs.appendElem('input', 'slider2');

  const slider1: HTMLInputElement = inputs.chooseElem<typeof HTMLInputElement>('slider1');
  slider1.type = 'range';
  slider1.min = name.toLowerCase() === 'price' ? Math.min(...priceSort).toString() : Math.min(...stockSort).toString();
  slider1.max = name.toLowerCase() === 'price' ? Math.max(...priceSort).toString() : Math.max(...stockSort).toString();
  slider1.value = slider1.min;

  slider1.oninput = slideOne;

  const slider2: HTMLInputElement = inputs.chooseElem<typeof HTMLInputElement>('slider2');
  slider2.type = 'range';
  slider2.min = name.toLowerCase() === 'price' ? Math.min(...priceSort).toString() : Math.min(...stockSort).toString();
  slider2.max = name.toLowerCase() === 'price' ? Math.max(...priceSort).toString() : Math.max(...stockSort).toString();
  slider2.value = slider2.max;

  slider2.oninput = slideTwo;

  const minGap = 0;
  const range1: HTMLSpanElement = values.chooseElem<typeof HTMLSpanElement>('from-data');
  const range2: HTMLSpanElement = values.chooseElem<typeof HTMLSpanElement>('to-data');
  const sliderTrack: HTMLDivElement = inputs.chooseElem<typeof HTMLDivElement>('slider-track');
  const sliderMaxValue: number = +slider1.max;

  slideOne();
  slideTwo();

  function slideOne() {
    if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
      slider1.value = (parseInt(slider2.value) - minGap).toString();
    }
    range1.textContent = name.toLowerCase() === 'price' ? `$${slider1.value}` : `${slider1.value}`;

    fillColor();
  }

  function slideTwo() {
    if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
      slider2.value = (parseInt(slider1.value) + minGap).toString();
    }
    range2.textContent = name.toLowerCase() === 'price' ? `$${slider2.value}` : `${slider2.value}`;

    fillColor();
  }

  function fillColor() {
    const percent1 = (parseInt(slider1.value) / sliderMaxValue) * 100;
    const percent2 = (parseInt(slider2.value) / sliderMaxValue) * 100;

    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  }

  if (name.toLowerCase() === 'price') {
    slider1Price = slider1;
    slider2Price = slider2;
    range1Price = range1;
    range2Price = range2;
    sliderTrackPrice = sliderTrack;
  } else {
    slider1Stock = slider1;
    slider2Stock = slider2;
    range1Stock = range1;
    range2Stock = range2;
    sliderTrackStock = sliderTrack;
  }

  return [description, slider, values.elem, inputs.elem];
}
