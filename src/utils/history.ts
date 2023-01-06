import stateHandler from '../components/controller/stateHandler';

const history = () => {
  if (!window.history.state) {
    window.history.replaceState(
      { id: 0, path: window.location.search || window.location.pathname || './' },
      '',
      window.location.search || window.location.pathname || './'
    );

    stateHandler();
  } else stateHandler();
};

export default history;
