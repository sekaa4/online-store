import stateHandler from '../components/controller/stateHandler';
import { buildPage } from '../components/buildPage';

const history = () => {
  if (!window.history.state) {
    window.history.replaceState(
      { id: 0, path: window.location.search || window.location.pathname || './' },
      '',
      window.location.search || window.location.pathname || './'
    );

    buildPage();
    stateHandler();
  } else {
    buildPage();
    stateHandler();
  }
};

export default history;
