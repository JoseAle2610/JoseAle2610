import React from 'react';
import App from './App';
import Global from '@/components/Global'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global /> 
    <App />
  </React.StrictMode>
);
