import { h, render } from 'preact';
import { connect } from 'unistore/preact';

const App = ({ count, increment, increment2, incrementAndLog, incrementAsync }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>increment</button>
    <button onClick={incrementAndLog}>incrementAndLog</button>
    <button onClick={incrementAsync}>incrementAsync</button>
  </div>
);

export default connect(
  'count',
  {
    increment: 'increment',
    incrementAndLog: 'incrementAndLog',
    incrementAsync: 'incrementAsync',
  },
)(App);
