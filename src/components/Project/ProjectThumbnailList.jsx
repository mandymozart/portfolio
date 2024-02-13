'use client';
import styled from '@emotion/styled';
import docs from '../../data/index.js';
import ProjectThumbnailItem from './ProjectThumbnailItem';

const Container = styled.div`
  position: relative;
  width: var(--content-width);
  margin: 0 auto;

  .list {
    padding: 0 var(--grid-padding);
    display: grid;
    gap: 8rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectThumbnailList = () => {
  const handleMouseOver = (uid) => {
    // console.log(uid);
  };
  console.log(docs);
  if (!docs.projects) return <>...</>;

  return (
    <Container>
      <div className='list'>
        {docs.projects.map((project, index) => (
          <ProjectThumbnailItem
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

export default ProjectThumbnailList;
