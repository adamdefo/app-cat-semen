import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import AppRoot from './AppRoot/AppRoot';
import AppGuard from './/guard/AppGuard';
import AppRouter from './router/AppRouter';
import Main from './AppRoot/Main/Main';
import Posts from './components/posts/Posts';
import './assets/index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "posts",
        element: <AppGuard />,
        children: [{
          path: "",
          element: <Posts />
        }]
      },
    ],
  },
]);

const appRootRender = ReactDOM.createRoot(document.getElementById('app-cat-semen'));
appRootRender.render(
  <Provider store={store}>
    <AppRouter />
    {/* <RouterProvider router={router} /> */}
  </Provider>
);

{/* <React.StrictMode></React.StrictMode> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
