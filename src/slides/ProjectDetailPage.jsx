'use client';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProjectInterface } from '../components/Project/ProjectInterface';
import { useRouteChangeListener } from './../events/routerEvents';

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
      </Routes>
    </>
  );
}

export default ProjectDetailPage;
function ProjectRouterBridge() {
  const navigate = useNavigate();

  // TODO loses closure
  const routeChangeHandler = (routeChange) => {
    console.log('requested ...', routeChange);
    if (routeChange.to.key !== 'project') return;
    navigate({
      pathname: routeChange.params.uid,
    });
  };

  useRouteChangeListener(routeChangeHandler);
  return <></>;
}
