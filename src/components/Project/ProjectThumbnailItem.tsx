import styled from '@emotion/styled';
import { playToneAtRoute } from '../../audio';
import { emitRouteChange } from '../../events/routerEvents';
import { routes } from '../../slideInRoutes';
import useMenuStore from '../../stores/MenuStore';

const Container = styled.div`
  border: 0;
  background: transparent;
  box-shadow: none;
  width: 100%;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 4rem;
  /* margin-right: var(--grid-padding); */
  text-decoration: none;
  font-size: 2rem;
  font-family: var(--font);
  position: relative;
  border-radius: 4rem;
  transition: all 0.2s ease-in;
  /* mix-blend-mode: darken; */
  img {
    width: 100%;
  }
  &:hover {
    color: var(--secondary);
    font-style: italic;
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

const ProjectThumbnailItem = ({ project, ...props }: Props) => {
  const setActiveMenuItem = useMenuStore((state) => state.setActiveMenuItem);

  const navigateTo = (uid: string) => () => {
    playToneAtRoute(routes.PROJECT.key);
    setActiveMenuItem(routes.PROJECT);
    emitRouteChange({ to: routes.PROJECT, params: { uid: uid } });
  };
  if (!project) return <></>;
  return (
    <Container
      onClick={navigateTo(project.uid)}
      {...props}>
      {project.data.name}
      {project.data.images[0].desktop && (
        <img
          src={project.data.images[0].desktop.url}
          alt={project.data.name}
        />
      )}
    </Container>
  );
};

export default ProjectThumbnailItem;
