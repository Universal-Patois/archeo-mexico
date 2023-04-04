import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './components/App/App';
// import Home, { homeLoader } from '.components/Home/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: appLoader,
    // children: [
    //   {
    //     path: "/home",
    //     element: <Home />,
    //     loader: homeLoader,
    //   }
    // ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
