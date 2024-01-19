'use client';

import { HashRouter } from 'react-router-dom';
import LoadingScreenSimple from './components/LoadingScreen/LoadingScreenSimple';
import NavMenu from './components/NavMenu/NavMenu';
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
        <HomePage />
        <Slides />
      </HashRouter>
    </>
  );
}

export default App;
