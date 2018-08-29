import { h, render } from 'preact';
import { Provider } from 'unistore/preact';
import store from './store';
import App from './App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body,
);
