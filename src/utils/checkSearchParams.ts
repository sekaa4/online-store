import getURL from '../components/getURL';

export default function checkSearchParams(key: string, value: string) {
  const url: URL = getURL(window.location.toString());
  if (key === 'reset') {
    window.history.state.id += 1;
    window.history.pushState({ id: window.history.state.id, path: value }, '', value);
    return;
  }

  if (!url.searchParams.has(key)) {
    url.searchParams.append(key, value);
    window.history.state.id += 1;
    window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
    return;
  }

  if (url.searchParams.has(key) && url.searchParams.get(key) !== value) {
    if (key === 'sort' || key === 'list' || key === 'search' || key === 'price' || key === 'stock') {
      url.searchParams.set(key, value);
      window.history.state.id += 1;
      window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
    } else {
      const oldValue: string = <string>url.searchParams.get(key);
      const values: string[] = oldValue.split('↕');
      console.log(values);
      if (values.includes(value)) {
        values.splice(values.indexOf(value), 1);
        const newValue = values.join('↕');
        url.searchParams.set(key, newValue);
        window.history.state.id += 1;
        window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
      } else {
        const newValue = `${url.searchParams.get(key)}↕${value}`;
        url.searchParams.set(key, newValue);
        window.history.state.id += 1;
        window.history.pushState({ id: window.history.state.id, path: url.search }, '', url.search);
      }
    }
  } else if (key !== 'sort' && key !== 'list' && key !== 'search' && key !== 'price' && key !== 'stock') {
    url.searchParams.delete(key);
    window.history.state.id += 1;
    window.history.pushState({ id: window.history.state.id, path: url.search || './' }, '', url.search || './');
  }
}
