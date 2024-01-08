'use client';

import { PrismicProvider } from '@prismicio/react';
import { HashRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoadingScreenSimple from './components/LoadingScreen/LoadingScreenSimple';
import NavMenu from './components/NavMenu/NavMenu';
import './index.css';
import { createClient } from './prismicio';
import { routes } from './slideInRoutes';
import HomePage from './slides/HomePage';
import Slides from './slides/Slides';
function App() {
  const client = createClient();
  return (
    <>
      <HashRouter>
        <NavMenu />
        <LoadingScreenSimple />
        <HomePage route={routes.HOME} />
        <PrismicProvider client={client}>
          <Slides />
        </PrismicProvider>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
