import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BREAKPOINT_XS } from '../../../config';
import Magnetic from '../../animations/Magnetic';
import { staggerVariants, translateProjectVariants } from '../../animations/site';
import { playToneAtRoute } from '../../audio';
import { ProjectDocument } from '../../data/types';
import { routes } from '../../routes';
import useMenuStore from '../../stores/MenuStore';
import ProjectTags from './ProjectTags';

const Container = styled.div`
  border: 0;
  background: transparent;
  box-shadow: none;
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: var(--grid-padding);
  margin: 0;
  font-size: 2rem;
  line-height: 4rem;
  font-family: var(--font);
  cursor: pointer;


  text-decoration: none;
  position: relative;
  transition: all 0.2s ease-in;
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
    display: block;
  }
  &:hover {
    /* color: var(--secondary); */
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
    /* height: 6rem; */
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

const ProjectItem = ({ project, index, ...props }: Props) => {
  const setActiveMenuItem = useMenuStore((state) => state.setActiveMenuItem);
  const navigate = useNavigate()

  const navigateTo = (uid: string) => () => {
    playToneAtRoute(routes.PROJECT.key);
    setActiveMenuItem(routes.PROJECT);
    navigate(`/project/${uid}`);
  };
  if (!project) return <></>;
  return (
    <motion.div
          custom={0}
          initial='offscreen'
          whileInView='onscreen'
          variants={staggerVariants}>

    <Container {...props} onClick={navigateTo(project.uid)}>
      <motion.div
        custom={index+1}
        variants={translateProjectVariants}
        initial='initial'
        animate='enter'
        exit='exit'>
<h3  >{project.data.name}</h3>
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
        <div className='image'>
      <motion.div
        custom={index+4}
        variants={translateProjectVariants}
        initial='initial'
        animate='enter'
        exit='exit'>
          
          {project.data.preview && (
            <Magnetic>
              <img
                src={project.data.preview}
                alt={project.data.name}
                />
            </Magnetic>
          )}
          </motion.div>
        </div>
    </Container>
          </motion.div>
  );
};

export default ProjectItem;
