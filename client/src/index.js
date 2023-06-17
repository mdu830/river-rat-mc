import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/style.css'
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import  HomePage from './routes/HomePage';
import About from './routes/About';
import Contact from './routes/Contact'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
