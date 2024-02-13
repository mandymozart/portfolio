'use client';
import styled from '@emotion/styled';
import ProjectThumbnailList from '../components/Project/ProjectThumbnailList';

const Container = styled.div`
  /* Add your styles here */
  margin-top: var(--header-height);
`;

function ProjectsPage() {
  return (
    <Container>
      <ProjectThumbnailList />
    </Container>
  );
}

export default ProjectsPage;
