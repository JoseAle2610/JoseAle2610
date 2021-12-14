import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Global from './assets/global'
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

