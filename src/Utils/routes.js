import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const back = () => {
  history.goBack();
};

const forward = () => {
  history.goForward();
};

const go = (url) => {
  console.log(history, url)
  history.push(url);
};

export default {
  back,
  forward,
  go,
  history,
};