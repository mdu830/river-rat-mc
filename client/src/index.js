import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/style.css'
import reportWebVitals from './reportWebVitals';
// import Header from './components/header';
import Root from './Root';
// import  HomePage from './routes/HomePage';
import About from './routes/About';
import Contact from './routes/Contact'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
