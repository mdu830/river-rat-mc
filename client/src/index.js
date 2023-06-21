import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/style.css'
import reportWebVitals from './reportWebVitals';
import Root from './Root'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
