'use client';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import ProjectList from '../components/Project/ProjectList';
import useProjectsStore from '../stores/ProjectsStore';

const Container = styled.div`
  /* Add your styles here */
  .experiments {
    border-radius: 4rem;

    margin: 0 auto;
    width: var(--content-width);
    padding: var(--grid-padding);
    p {
      font-size: 2rem;
      text-indent: 6rem;
    }
    h3 {
      font-size: 4rem;
    }
  }
`;

function ProjectsPage() {
  const { projects } = useProjectsStore();

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: '10rem', behavior: 'smooth' });
    }
  }, [projects]);
  return (
    <Container ref={ref}>
      <ProjectList />
    </Container>
  );
}

export default ProjectsPage;
