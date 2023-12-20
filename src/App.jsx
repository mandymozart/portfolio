'use client';
import { PrismicProvider } from '@prismicio/react';
import clsx from 'clsx';
import Footer from './components/Footer/Footer';
import LoadingScreenSimple from './components/LoadingScreen/LoadingScreenSimple';
import NavMenu from './components/NavMenu/NavMenu';
import ProjectList from './components/Project/ProjectList';
import { SlideIn } from './components/SlideIn/SlideIn';
import './index.css';
import AttributionsPage from './pages/AttributionsPage';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import ImprintPage from './pages/ImprintPage';
import PrivacyPolicy from './pages/PrivacyPolicyPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResumePage from './pages/ResumePage';
import { createClient } from './prismicio';
import useMenuStore from './stores/MenuStore';
function App() {
  const client = createClient();
  const activeMenuItem = useMenuStore(state => state.activeMenuItem);
  console.log(client);
  return (
    <>
      <NavMenu />
      <LoadingScreenSimple />
      <PrismicProvider client={client}>
        <SlideIn className={clsx({ isActive: activeMenuItem === 'project' })}>
          <ProjectDetailPage />
        </SlideIn>
        <SlideIn className={clsx({ isActive: activeMenuItem === 'projects' })}>
          <ProjectList />
        </SlideIn>
        <SlideIn
          className={clsx({ isActive: activeMenuItem === 'experiences' })}
        >
          <ExperiencePage />
        </SlideIn>
        <SlideIn className={clsx({ isActive: activeMenuItem === 'resume' })}>
          <ResumePage />
        </SlideIn>
        <SlideIn
          className={clsx(
            { isActive: activeMenuItem === 'imprint' },
            'slidein--footer'
          )}
        >
          <ImprintPage />
        </SlideIn>
        <SlideIn
          className={clsx(
            { isActive: activeMenuItem === 'attributions' },
            'slidein--footer'
          )}
        >
          <AttributionsPage />
        </SlideIn>
        <SlideIn
          className={clsx(
            { isActive: activeMenuItem === 'privacy' },
            'slidein--footer'
          )}
        >
          <PrivacyPolicy />
        </SlideIn>
      </PrismicProvider>
      <HomePage className={clsx({ isActive: activeMenuItem === 'home' })} />
      <Footer />
    </>
  );
}

export default App;
