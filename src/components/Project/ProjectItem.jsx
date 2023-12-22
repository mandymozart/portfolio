import { emitRouteChange } from '@/events/routerEvents';
import useMonoSynth from '@/hooks/useMonoSynth';
import { routes } from '@/slideInRoutes';
import styled from '@emotion/styled';
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

  const { playToneAtRoute } = useMonoSynth();

  const navigateTo = uid => () => {
    const rC = { to: routes.PROJECT, params: { uid: uid } };
    rC.to.params = { uid: uid };
    console.log('navigateTo', rC);
    playToneAtRoute(rC.key);
    setActiveMenuItem(routes.PROJECT);
    setActiveProject(uid);
    emitRouteChange(rC);
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
