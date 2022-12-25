import parseSearchParams from '../parseSearchParams';
import layoutHandler from './layoutHandler';

export default function stateHandler() {
  if (window.history.state.path) {
    const url: URLSearchParams = parseSearchParams(window.history.state.path);
    layoutHandler(url);
  }
}
