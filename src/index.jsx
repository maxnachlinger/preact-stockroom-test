import { h, render } from 'preact';
import { Provider } from 'unistore/preact';
import createStore from 'unistore';
import App from './App';

const store = createStore({ count: 0 });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body,
);
