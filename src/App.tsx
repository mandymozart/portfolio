'use client';

import { Outlet, Route, Routes } from 'react-router-dom';
import PageTransition from './animations/PageTransition'; // Import the PageTransition component
import NavMenu from './components/NavMenu/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import AttributionsPage from './pages/AttributionsPage';
import HomePageNoGl from './pages/HomePage';
import ImprintPage from './pages/ImprintPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProjectPage from './pages/ProjectPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageNoGl />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="attributions" element={<AttributionsPage />} />
          <Route path="projects" element={<ProjectsPage />}/>
          <Route path="project" element={<Outlet/>}>
            <Route path=":uid" element={<ProjectPage />} />
          </Route>
          <Route path="imprint" element={<ImprintPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}


function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavMenu />
      <div style={{ paddingTop: '8rem' }}>
        <PageTransition />
      </div>
    </>
  );
}

export default App;
