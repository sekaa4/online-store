import getURL from '../getURL';
import { ControllerElements } from '../../interfaces/ControllerElements';

export default class ControllerElement implements ControllerElements {
  constructor(private elem: HTMLElement, public classes?: string[]) {
    this.elem = elem;
    this.classes = classes || [];
  }

  start(): void {
    this.elem.addEventListener('click', (e: Event): void => {
      if (e.currentTarget instanceof HTMLElement) {
        if (e.target instanceof HTMLElement && e.target.classList.contains('view-mode__list')) {
          this.activeList(e.currentTarget, e.target);
        } else if (e.target instanceof HTMLElement && e.target.classList.contains('view-mode__table')) {
          this.activeTable(e.currentTarget, e.target);
        }
      }
    });
  }

  activeTable(currentTarget: HTMLElement, target: HTMLElement): void {
    Array.from(currentTarget.children).forEach((child) => {
      child.classList.remove('view-mode__active');
    });
    target.classList.add('view-mode__active');

    const url = getURL(window.location.toString());
    if (url.searchParams.has('list') && url.searchParams.get('list') === 'true') {
      url.searchParams.set('list', 'false');
      window.history.state.id += 1;
      window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
    }
    if (!url.searchParams.has('list')) {
      url.searchParams.append('list', 'false');
      window.history.state.id += 1;
      window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
    }
  }

  activeList(currentTarget: HTMLElement, target: HTMLElement): void {
    Array.from(currentTarget.children).forEach((child) => {
      child.classList.remove('view-mode__active');
    });
    target.classList.add('view-mode__active');

    const url = getURL(window.location.toString());
    if (url.searchParams.has('list') && url.searchParams.get('list') === 'false') {
      url.searchParams.set('list', 'true');
      window.history.state.id += 1;
      window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
    }
    if (!url.searchParams.has('list')) {
      url.searchParams.append('list', 'true');
      window.history.state.id += 1;
      window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
    }
  }
}
