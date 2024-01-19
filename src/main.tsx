import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/css/fonts.css';
import './assets/css/index.css';
import './assets/css/variables.css';
import { mutate } from './data/mutations.js';
console.log(JSON.stringify(mutate()));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
