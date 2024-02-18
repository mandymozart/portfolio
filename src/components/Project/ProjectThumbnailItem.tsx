import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Magnetic from '../../animations/Magnetic';
import { translateProjectVariants } from '../../animations/site';
import { playToneAtRoute } from '../../audio';
import { ProjectDocument } from '../../data/types';
import { emitRouteChange } from '../../events/routerEvents';
import { routes } from '../../slideInRoutes';
import useMenuStore from '../../stores/MenuStore';
import { BREAKPOINT_XS } from './../../../config';
import ProjectTags from './ProjectTags';

const Container = styled.div`
  border: 0;
  background: transparent;
  box-shadow: none;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 2rem;
  line-height: 4rem;
  font-family: var(--font);
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-right: var(--grid-padding); */
  text-decoration: none;
  position: relative;
  transition: all 0.2s ease-in;
  /* mix-blend-mode: darken; */
  h3 {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 4rem;
    font-family: var(--font);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  img {
    width: 100%;
    border-radius: 2rem;
  }
  &:hover {
    color: var(--secondary);
    font-style: italic;
    .tags {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .tags {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    transform: translateY(6rem);
    height: 6rem;
    line-height: 3rem;
    @media (max-width: ${BREAKPOINT_XS}) {
      display: none;
    }
    button {
      margin-right: 1rem;
    }
  }
`;

export interface ProjectFilter {
  category: string;
  uid: string;
}

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  project: ProjectDocument;
  index: number;
}

const ProjectThumbnailItem = ({ project, index, ...props }: Props) => {
  const setActiveMenuItem = useMenuStore((state) => state.setActiveMenuItem);

  const navigateTo = (uid: string) => () => {
    playToneAtRoute(routes.PROJECT.key);
    setActiveMenuItem(routes.PROJECT);
    emitRouteChange({ to: routes.PROJECT, params: { uid: uid } });
  };
  if (!project) return <></>;
  return (
    <Container {...props}>
      <motion.div
        custom={index}
        variants={translateProjectVariants}
        initial='initial'
        animate='enter'
        exit='exit'>
        <div onClick={navigateTo(project.uid)}>
          <h3>{project.data.name}</h3>
          {project.data.preview && (
            <Magnetic>
              <img
                src={project.data.preview}
                alt={project.data.name}
              />
            </Magnetic>
          )}
        </div>
        <div className='tags'>
          <ProjectTags
            tags={project.data.industries}
            category={'industries'}
          />
          <ProjectTags
            tags={project.data.types}
            category={'types'}
          />
          <ProjectTags
            tags={project.data.roles}
            category={'roles'}
          />
        </div>
      </motion.div>
    </Container>
  );
};

export default ProjectThumbnailItem;
