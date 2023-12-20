'use client';
import styled from '@emotion/styled';
import ProjectList from '../components/Project/ProjectList';

const Container = styled.div`
  /* Add your styles here */
  margin-top: var(--header-height);
`;

function ProjectsPage() {
  return (
    <Container>
      <ProjectList />
    </Container>
  );
}

export default ProjectsPage;
