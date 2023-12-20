'use client';
import { PrismicProvider } from '@prismicio/react';
import clsx from 'clsx';
import Footer from './components/Footer/Footer';
import LoadingScreenSimple from './components/LoadingScreen/LoadingScreenSimple';
import NavMenu from './components/NavMenu/NavMenu';
import SlideIn from './components/SlideIn/SlideIn';
import './index.css';
import { createClient } from './prismicio';
import AttributionsPage from './slides/AttributionsPage';
import ExperiencePage from './slides/ExperiencePage';
import HomePage from './slides/HomePage';
import ImprintPage from './slides/ImprintPage';
import PrivacyPolicy from './slides/PrivacyPolicyPage';
import ProjectDetailPage from './slides/ProjectDetailPage';
import ProjectsPage from './slides/ProjectsPage';
import ResumePage from './slides/ResumePage';
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
          <ProjectsPage />
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
