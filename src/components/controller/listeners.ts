import { buildPage } from '../buildPage';
import getData from '../getData';
import stateHandler from './stateHandler';
import history from '../../utils/history';

(async function indexPage() {
  if (localStorage.getItem('data')) {
    addEventListener('DOMContentLoaded', buildPage);
    addEventListener('DOMContentLoaded', history);
    addEventListener('popstate', () => {
      stateHandler();
    });
  } else {
    const data = await getData();

    if (data.products) {
      buildPage();
      history();
      addEventListener('popstate', () => {
        stateHandler();
      });
    }
  }
})();
