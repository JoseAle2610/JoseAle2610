import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Global from 'components/Global'
import 'victormono'

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
