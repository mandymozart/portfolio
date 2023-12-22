'use client';
import { useRouteChangeListener } from '@/events/routerEvents';
import { routes } from '@/slideInRoutes';
import { usePrismicClient } from '@prismicio/react';
import { useCallback, useEffect, useState } from 'react';
import { ProjectInterface } from '../components/Project/ProjectInterface';

function ProjectDetailPage() {
  const client = usePrismicClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // TODO loses closure
  const routeChangeHandler = useCallback(({ to }) => {
    console.log('params.uid:', to.params?.uid);
    if (to.key === routes.PROJECT) {
      getData(to.params?.uid);
    }
  }, []);

  useRouteChangeListener(routeChangeHandler);

  const getData = async uid => {
    console.log('getData', uid);
    setLoading(true);
    setError(null);
    try {
      const response = await client.getByUID('project', uid);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []); // dependencies

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;
  if (!data) return 'No data';

  return (
    <>
      <ProjectInterface project={project} />
    </>
  );
}

export default ProjectDetailPage;
