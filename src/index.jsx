import { h, render } from 'preact';
import { Provider } from 'unistore/preact';
import { setupStore } from './store';
import App from './screens/App';

render(
  <Provider store={setupStore(window)}>
    <App />
  </Provider>,
  document.body,
);
