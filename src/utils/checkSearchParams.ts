import getURL from '../components/getURL';

export default function checkSearchParams(key: string, value: string) {
  const url = getURL(window.location.toString());

  if (url.searchParams.has(key) && url.searchParams.get(key) !== value) {
    url.searchParams.set(key, value);
    window.history.state.id += 1;
    window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
  }

  if (!url.searchParams.has(key)) {
    url.searchParams.append(key, value);
    window.history.state.id += 1;
    window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
  }
}
