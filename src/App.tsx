'use client';

import { HashRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoadingScreenSimple from './components/LoadingScreen/LoadingScreenSimple';
import NavMenu from './components/NavMenu/NavMenu';
import './index.css';
import { routes } from './slideInRoutes';
import HomePage from './slides/HomePage';
import Slides from './slides/Slides';
function App() {
  const handleLoaderFinished = () => {
    console.log('handleLoaderFinished');
  };
  return (
    <>
      <HashRouter>
        <NavMenu />
        <LoadingScreenSimple onLoaderFinished={handleLoaderFinished} />
        <HomePage route={routes.HOME} />
        <Slides />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
