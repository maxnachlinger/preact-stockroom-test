const interopRequire = (m) => m.default || m;

export const setupStore = (win) => {
  if (!win.Worker) {
    const createStore = interopRequire(require('stockroom/inline'));
    return createStore(interopRequire(require('./store-worker')));
  }

  const createStore = interopRequire(require('stockroom'));
  return createStore(require('worker-loader!./store-worker')());
};
