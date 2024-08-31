'use client';
import styled from '@emotion/styled';
import docs from '../../data/index.js';
import {
  BREAKPOINT_SM
} from './../../../config';
import ProjectItem from './ProjectItem.js';
const Container = styled.div`
  position: relative;
  max-width: var(--content-width);
  margin: 0 auto;
  h2 {
    padding: 8rem var(--grid-padding) 16rem var(--grid-padding);
    font-size: 12rem;
    color: var(--aero-blue);
    @media (max-width: ${BREAKPOINT_SM}) {
      font-size: 4rem;
      padding: 2rem var(--grid-padding) 2rem var(--grid-padding);
    }
    position: sticky;
    top: 6rem;
    z-index: -1;
  }
  .list {
    padding: var(--grid-padding);
    transition: all 0.8s ease-in-out;
    > div {
      padding: 2rem 0;
      border-bottom: 1px solid;
    }
  }
`;

const ProjectList = () => {
  

  return (
    <Container>
      <h2>
        Projects
      </h2>
      <div className='list'>

        {docs.projects.map((project, index) =>
            <ProjectItem
            role='listitem'
            key={index}
            index={index}
            className='listitem'
            project={project}
            />
            
          )}
          </div>
    </Container>
  );
};

export default ProjectList;
