import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BREAKPOINT_MD } from '../../../config';
import { playToneAtRoute } from '../../audio';
import Arrow from '../Common/Icons/Arrow';
import { staggerVariants } from './../../animations/site';
import { routes } from './../../routes';
import useMenuStore from './../../stores/MenuStore';

const Container = styled.header`
  cursor: pointer;
  h3 {
    margin: 0;
    padding: 2rem var(--grid-padding);
    font-size: 2rem;
    line-height: 2rem;
    display: flex;
    align-content: center;
    gap: 1rem;
    @media (max-width: ${BREAKPOINT_MD}) {
      padding: 2rem var(--grid-padding) 1rem var(--grid-padding);
    }
    &:hover {
      color: var(--secondary);
    }
  }
  .subheader {
    display: grid;
    padding-bottom: 2rem;
    line-height: 1.5rem;
    grid-template-columns: 4fr 1fr 1fr;
    @media (max-width: ${BREAKPOINT_MD}) {
      grid-template-columns: 1fr;
    }
    span {
      padding: 0 var(--grid-padding);
      @media (max-width: ${BREAKPOINT_MD}) {
        padding: 0 var(--grid-padding) 1rem var(--grid-padding);
      }
    }
  }
`;

export const FeatureProjectHeader = ({ project }) => {
  const setActiveMenuItem = useMenuStore((state) => state.setActiveMenuItem);
  const navigate = useNavigate()

  const navigateTo = (uid) => () => {
    playToneAtRoute(routes.PROJECT.key);
    setActiveMenuItem(routes.PROJECT);
    navigate(`/project/${uid}`);
  };
  return (
    <Container onClick={navigateTo(project.uid)}>
      <motion.div
        className='info'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
        variants={staggerVariants}>
        <motion.h3
          className='title'
          custom={0}
          initial='offscreen'
          whileInView='onscreen'
          variants={staggerVariants}>
          {project.name} <Arrow />
        </motion.h3>
        <div className='subheader'>
          <motion.span
            className='subtitle'
            custom={1}
            initial='offscreen'
            whileInView='onscreen'
            variants={staggerVariants}>
            Roles → {project?.roles}
          </motion.span>
          <motion.span
            className='industry'
            custom={2}
            initial='offscreen'
            whileInView='onscreen'
            variants={staggerVariants}>
            {project?.industry}
          </motion.span>
          <motion.span
            className='type'
            custom={3}
            initial='offscreen'
            whileInView='onscreen'
            variants={staggerVariants}>
            {project?.type}
          </motion.span>
        </div>
      </motion.div>
    </Container>
  );
};
