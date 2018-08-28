import { h, render } from 'preact';
import createStore from 'unistore';
import { Provider, connect } from 'unistore/preact';

let store = createStore({ count: 0 });

// If actions is a function, it gets passed the store:
let actions = (store) => ({
  // Actions can just return a state update:
  increment(state) {
    return { count: state.count + 1 };
  },

  // The above example as an Arrow Function:
  increment2: ({ count }) => ({ count: count + 1 }),

  //Actions receive current state as first parameter and any other params next
  //check this function as <button onClick={incrementAndLog}>
  incrementAndLog: ({ count }, event) => {
    console.info(event);
    return { count: count + 1 };
  },

  // Async actions can be pure async/promise functions:
  async getStuff(state) {
    let res = await fetch('/foo.json');
    return { stuff: await res.json() };
  },

  // ... or just actions that call store.setState() later:
  incrementAsync(state) {
    setTimeout(() => {
      store.setState({ count: state.count + 1 });
    }, 100);
  },
});

const App = connect(
  'count',
  actions,
)(({ count, increment, increment2, incrementAndLog, incrementAsync }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>increment</button>
    <button onClick={increment2}>increment2</button>
    <button onClick={incrementAndLog}>incrementAndLog</button>
    <button onClick={incrementAsync}>incrementAsync</button>
  </div>
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body,
);
