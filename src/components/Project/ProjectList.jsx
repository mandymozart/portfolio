'use client';
import styled from '@emotion/styled';
import docs from './../../data/index.js';
import ProjectItem from './ProjectItem';

const Container = styled.div`
  position: relative;
  width: 100%;
  .list {
    padding: 0 var(--grid-padding);
  }
`;

const ProjectList = () => {
  const handleMouseOver = (uid) => {
    // console.log(uid);
  };
  console.log(docs);
  if (!docs.projects) return <>...</>;

  return (
    <Container>
      <div className='list'>
        {docs.projects.map((project, index) => (
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
