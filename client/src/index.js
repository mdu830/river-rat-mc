import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/style.css'
import reportWebVitals from './reportWebVitals';

import Root from './Root';
import ErrorPage from './routes/ErrorPage';
import HomePage from './routes/HomePage';
import Services from './routes/Services';
import Testimonials from './routes/Testimonials';
import Gallery from './routes/Gallery'
import About from './routes/About';
import Contact from './routes/Contact'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
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
