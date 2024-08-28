import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { playToneAtRoute } from '../../audio';
import useMenuStore from '../../stores/MenuStore';
import { routes } from './../../slideInRoutes';

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
  font-family: var(--font);
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

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  project: any;
}

const ProjectItem = ({ project, ...props }: Props) => {
  const setActiveMenuItem = useMenuStore((state) => state.setActiveMenuItem);
  const navigate = useNavigate()

  const navigateTo = (uid: string) => () => {
    playToneAtRoute(routes.PROJECT.key);
    setActiveMenuItem(routes.PROJECT);
    navigate(`/project/${uid}`);
  };
  if (!project) return <></>;
  return (
    <Container
      onClick={navigateTo(project.uid)}
      {...props}>
      {project.data.name}
      <span>&mdash;</span>
    </Container>
  );
};

export default ProjectItem;
