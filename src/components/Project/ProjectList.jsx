'use client';
import styled from '@emotion/styled';
import { usePrismicDocumentsByType } from '@prismicio/react';
import ProjectItem from './ProjectItem';

const Container = styled.div`
  position: relative;
  width: 100%;
  .list {
    padding: 0 var(--grid-padding);
  }
`;

const ProjectList = () => {
  const [documents] = usePrismicDocumentsByType('project');
  if (!documents) return <>...</>;
  console.log(documents);
  return (
    <Container>
      <div className='list'>
        {documents.results.map((project, index) => (
          <ProjectItem
            onMouseOver={() => handleMouseOver(project.uid)}
            onFocus={() => handleMouseOver(project.uid)}
            role='listitem'
            key={index}
            project={project}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProjectList;
