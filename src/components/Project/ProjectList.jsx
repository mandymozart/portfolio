'use client';
import styled from '@emotion/styled';
import { projects } from './../../mockData/data.json';
import ProjectItem from './ProjectItem';

const Container = styled.div`
  position: relative;
  width: 100%;
  .list {
    padding: 0 var(--grid-padding);
  }
`;

const ProjectList = () => {
  const handleMouseOver = uid => {
    // console.log(uid);
  };
  if (!projects) return <>...</>;

  return (
    <Container>
      <div className='list'>
        {projects.map((project, index) => (
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
