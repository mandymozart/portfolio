'use client';

import { Outlet, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './slides/AboutPage';
import AttributionsPage from './slides/AttributionsPage';
import HomePageNoGl from './slides/HomePageNoGl';
import ImprintPage from './slides/ImprintPage';
import NotFoundPage from './slides/NotFoundPage';
import PrivacyPolicyPage from './slides/PrivacyPolicyPage';
import ProjectPage from './slides/ProjectPage';
import ProjectsPage from './slides/ProjectsPage';

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
    <ScrollToTop/>
      <NavMenu />
      <div style={{paddingTop: '8rem'}}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
