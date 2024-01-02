'use client';
import useMenuStore from '@/stores/MenuStore';
import styled from '@emotion/styled';
import { usePrismicDocumentsByType } from '@prismicio/react';
import { useEffect } from 'react';
import ProjectItem from './ProjectItem';

const Container = styled.div`
  position: relative;
  width: 100%;
  .list {
    padding: 0 var(--grid-padding);
  }
`;

const ProjectList = () => {
  const [documents, { state }] = usePrismicDocumentsByType('project');
  const { addPreloadedKey } = useMenuStore();
  const handleMouseOver = uid => {
    // console.log(uid);
  };
  useEffect(() => {
    console.log('state', state);
    if (state === 'loading') return;
    if (state === 'error') return;
    if (state === 'idle') return;
    if (state === 'loaded') addPreloadedKey('ProjectList');
  }, [state]);
  if (!documents) return <>...</>;

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
