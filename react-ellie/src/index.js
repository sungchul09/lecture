import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'pages/Basic/AppJSX';
import reportWebVitals from 'reportWebVitals';
import AppProfile from 'pages/Basic/AppProfile';
import AppCounter from 'pages/Basic/AppCounter';
import AppProducts from 'pages/Basic/AppProducts';
import AppRouter from 'pages/Router/AppRouter';
import AppQuery from 'pages/Query/AppQuery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppQuery />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
