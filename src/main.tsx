import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './assets/css/fonts.css';
import './assets/css/index.css';
import './assets/css/variables.css';
import { initAudio } from './audio.ts';
import { AudioProvider } from './hooks/useAudio.tsx';
initAudio(false)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AudioProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AudioProvider>
  </React.StrictMode>,
);
