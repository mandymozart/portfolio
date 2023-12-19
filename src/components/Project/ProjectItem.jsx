import styled from '@emotion/styled';
import React from 'react';
import useMenuStore from '../../stores/MenuStore';
import useProjectStore from '../../stores/ProjectStore';

const Container = styled.div`
  border: 0;
  background: transparent;
  box-shadow: none;
  width: 100%;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: inline;
  line-height: 4rem;
  /* margin-right: var(--grid-padding); */
  grid-template-columns: 4fr 1fr 1fr;
  text-decoration: none;
  font-size: 3rem;
  font-family: var(--font-mono);
  position: relative;
  transition: all 0.2s ease-in;
  &:hover {
    color: var(--secondary);
    span {
      color: var(--primary);
    }
  }
  &:last-child span {
    display: none;
  }
`;

const ProjectItem = ({ project, ...props }) => {
  const setActiveProject = useProjectStore(state => state.setActiveProject);
  const setActiveMenuItem = useMenuStore(state => state.setActiveMenuItem);
  const navigateTo = uid => () => {
    setActiveMenuItem('project');
    setActiveProject(uid);
  };
  if (!project) return <></>;
  return (
    <Container onClick={navigateTo(project.uid)}>
      {project.data.name}
      <span>&mdash;</span>
    </Container>
  );
};

export default ProjectItem;
