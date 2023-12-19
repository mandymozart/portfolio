import styled from '@emotion/styled';
import { PrismicProvider } from '@prismicio/react';
import clsx from 'clsx';
import Footer from './components/Footer/Footer';
import LoadingScreenSimple from './components/LoadingScreen/LoadingScreenSimple';
import NavMenu from './components/NavMenu/NavMenu';
import ProjectList from './components/Project/ProjectList';
import AttributionsPage from './pages/AttributionsPage';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import ImprintPage from './pages/ImprintPage';
import PrivacyPolicy from './pages/PrivacyPolicyPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResumePage from './pages/ResumePage';
import { client } from './prismic';
import useMenuStore from './stores/MenuStore';

const SlideIn = styled.div`
  position: fixed;
  z-index: 1000000;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  right: 0;
  padding: var(--grid-padding);
  transition: all 0.2s ease-in-out;
  transform: translateY(100vh);
  border-radius: 4rem 4rem 0 0;
  background-color: var(--color-captions);
  overflow: auto;
  &.isActive {
    transform: translateY(0);
  }
  &.slidein--footer {
    background-color: var(--primary);
    color: var(--background);
  }
`;

function App() {
  const activeMenuItem = useMenuStore(state => state.activeMenuItem);
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
