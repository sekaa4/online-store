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
    addEventListener('DOMContentLoaded', history);
    const data = await getData();

    if (data.products) {
      addEventListener('popstate', () => {
        stateHandler();
      });

      buildPage();
      stateHandler();
    }
  }
})();
