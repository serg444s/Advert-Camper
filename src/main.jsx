// import { StrictMode } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './components/App/App.jsx'
import './index.css'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

