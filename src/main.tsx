import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { mutate } from './data/mutations.js';
import './index.css';
console.log(JSON.stringify(mutate()));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
