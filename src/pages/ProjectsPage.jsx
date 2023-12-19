import styled from '@emotion/styled';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

const Container = styled.div`
  /* Add your styles here */
`;

function ProjectsPage() {
  const [documents] = useAllPrismicDocumentsByType('project');
  console.log(JSON.stringify(documents));
  if (!documents) return <></>;
  return (
    <Container>
      <Breadcrumbs
        breadcrumbs={[{ path: '/', label: 'Home' }, { label: 'Projects' }]}
      />
      {/* <ProjectList projects={documents} /> */}
    </Container>
  );
}

export default ProjectsPage;
