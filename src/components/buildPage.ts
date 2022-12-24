import { renderHeader } from './render/header';
import { renderMain } from './render/main';
import { renderFooter } from './render/footer';
import { DataProducts } from '../interfaces/Data';
import { LocalStorage } from '../utils/persistentStorage';

export function buildPage(): void {
  renderHeader();
  const persistentStorage = new LocalStorage();
  const data: DataProducts[] = persistentStorage.getItem('data');
  renderMain(data);
  renderFooter();
}
