'use client';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProjectInterface } from '../components/Project/ProjectInterface';
import { SlideInRouteName } from '../slideInRoutes';
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

  // useEffect(() => {
  //   window.addEventListener('popstate', (event) => {
  //     if (event) {
  //       const uid = event.target.location.hash.replace('#/', '');
  //       if (uid)
  //         routeChangeHandler({
  //           to: {
  //             key: 'project',
  //             params: { uid: event.target.location.hash.replace('#/', '') },
  //           },
  //         });
  //       else
  //         navigate({
  //           pathname: '/',
  //         });
  //     }
  //   });
  // });

  const routeChangeHandler = (routeChange) => {
    if (routeChange.to.key !== SlideInRouteName.PROJECT) return;
    navigate({
      pathname: routeChange.params.uid,
    });
  };

  useRouteChangeListener(routeChangeHandler);
  return <></>;
}
