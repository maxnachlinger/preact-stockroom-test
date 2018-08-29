let store;

const interopRequire = (m) => m.default || m;

if (!window.Worker) {
  let createStore = interopRequire(require('stockroom/inline'));
  store = createStore(interopRequire(require('./store-worker')));
} else {
  let createStore = interopRequire(require('stockroom'));
  store = createStore(require('worker-loader!./store-worker')());
}

export default store;
