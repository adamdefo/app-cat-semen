import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import AppRouter from './router/AppRouter';
import './assets/styles/index.scss';

const appRootRender = ReactDOM.createRoot(document.getElementById('app-cat-semen'));
appRootRender.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

reportWebVitals();
