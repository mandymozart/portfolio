'use client';

import { HashRouter } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
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
        <LoadingScreen onLoaderFinished={handleLoaderFinished} />
        <HomePage />
        <Slides />
      </HashRouter>
    </>
  );
}

export default App;
