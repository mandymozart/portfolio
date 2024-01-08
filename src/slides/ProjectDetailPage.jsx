'use client';
import { useRouteChangeListener } from '@/events/routerEvents';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ExportPrismic } from '../components/ExportPrismic/ExportPrismic';
import { ProjectInterface } from '../components/Project/ProjectInterface';

function ProjectDetailPage() {
  return (
    <>
      <ProjectRouterBridge />
      <Routes>
        <Route
          path='/'
          element={<>No project selected</>}
        />
        <Route
          path='/:uid'
          element={<ProjectInterface />}
        />
        <Route
          path='/export'
          element={<ExportPrismic />}
        />
      </Routes>
    </>
  );
}

export default ProjectDetailPage;
function ProjectRouterBridge() {
  const navigate = useNavigate();

  // TODO loses closure
  const routeChangeHandler = routeChange => {
    console.log('requested ...', routeChange);
    if (routeChange.to.key !== 'project') return;
    navigate({
      pathname: routeChange.params.uid,
    });
  };

  useRouteChangeListener(routeChangeHandler);
  return <></>;
}
