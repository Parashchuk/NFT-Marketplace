import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename='/'>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
