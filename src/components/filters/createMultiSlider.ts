//TODO: CHECK "AS" and "!" fixed this !!!!!!!!!!!!!!!!!!!!!
import CreateElement from '../CreateElement';

export default function createMultiSlider(name: string) {
  const description: HTMLHeadingElement = document.createElement('h3');
  description.classList.add('dual-slider__description');
  description.innerHTML = name;
  const slider: HTMLDivElement = document.createElement('div');

  const values: CreateElement = new CreateElement('div', ['out-data', `out-data__${name.toLowerCase()}`]);
  values.appendElem('span', 'from-data', '0');
  values.appendElem('span', 'dash', '—');
  values.appendElem('span', 'to-data', '0');

  const inputs: CreateElement = new CreateElement('div', ['multi-range', 'multi-range__container']);
  inputs.appendElem('div', 'slider-track');
  inputs.appendElem('input', 'slider1');
  inputs.appendElem('input', 'slider2');

  const slider1 = inputs.chooseElem('slider1') as HTMLInputElement;
  if (slider1 && slider1 instanceof HTMLInputElement) {
    slider1.type = 'range';
    slider1.min = '0';
    slider1.max = '100';
    slider1.value = '30';
    slider1.oninput = slideOne;
  }

  const slider2 = inputs.chooseElem('slider2') as HTMLInputElement;
  if (slider2 && slider2 instanceof HTMLInputElement) {
    slider2.type = 'range';
    slider2.min = '0';
    slider2.max = '100';
    slider2.value = '70';
    slider2.oninput = slideTwo;
  }

  const minGap = 0;
  const range1 = values.chooseElem('from-data');
  const range2 = values.chooseElem('to-data');
  const sliderTrack = inputs.chooseElem('slider-track') as HTMLElement;
  const sliderMaxValue = +slider1.max;

  slideOne();
  slideTwo();

  function slideOne() {
    if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
      slider1.value = (parseInt(slider2.value) - minGap).toString();
    }
    range1!.textContent = slider1.value;
    fillColor();
  }

  function slideTwo() {
    if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
      slider2.value = (parseInt(slider1.value) + minGap).toString();
    }
    range2!.textContent = slider2.value;
    fillColor();
  }

  function fillColor() {
    const percent1 = (parseInt(slider1.value) / sliderMaxValue) * 100;
    const percent2 = (parseInt(slider2.value) / sliderMaxValue) * 100;
    sliderTrack!.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  }

  return [description, slider, values.elem, inputs.elem];
}
