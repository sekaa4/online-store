import getData from '../getData';
import history from '../../utils/history';

(async function indexPage() {
  if (localStorage.getItem('data')) {
    addEventListener('DOMContentLoaded', history);
    addEventListener('popstate', () => {
      history();
    });
  } else {
    const data = await getData();

    if (data.products) {
      history();
      addEventListener('popstate', () => {
        history();
      });
    }
  }
})();
