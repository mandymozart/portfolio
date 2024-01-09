import styled from '@emotion/styled';
import useMenuStore from '../../stores/MenuStore';
import { emitRouteChange } from './../../events/routerEvents';
import useMonoSynth from './../../hooks/useMonoSynth';
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

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  project: any;
}

const ProjectItem = ({ project, ...props }: Props) => {
  const setActiveMenuItem = useMenuStore(state => state.setActiveMenuItem);

  const { playToneAtRoute } = useMonoSynth();

  const navigateTo = (uid: string) => () => {
    playToneAtRoute(routes.PROJECT.key);
    setActiveMenuItem(routes.PROJECT);
    emitRouteChange({ to: routes.PROJECT, params: { uid: uid } });
  };
  if (!project) return <></>;
  return (
    <Container
      onClick={navigateTo(project.uid)}
      {...props}
    >
      {project.data.name}
      <span>&mdash;</span>
    </Container>
  );
};

export default ProjectItem;
