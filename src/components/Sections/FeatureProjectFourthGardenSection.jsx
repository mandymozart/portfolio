import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { revealVariants, staggerVariants } from './../../animations/site';

const Container = styled.section`
  position: relative;
  font-family: var(--font);
  height: 200vh;

  max-width: var(--content-width);
  margin: 0 auto;
  @media (max-width: 850px) {
  }
  .overlay {
    width: 100%;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .lead {
        padding: 0 var(--grid-padding);
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        p {
          font-size: 3rem;
          line-height: 4rem;
          margin-bottom: 4rem;
          grid-column: 2 / span 4;
        }
        @media (max-width: 850px) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
          grid-column: 1 / span 6;
        }
      }
      .presentation {
        display: grid;
        height: 100vh;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
        min-height: calc(100vh - var(--feature-project-header-height));
        @media (max-width: 850px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .image {
          grid-column: 2 / span 4;
          padding: 0 var(--grid-padding);
          img {
            width: 100%;
            border-radius: 2rem;
          }
        }
        .plants {
          position: absolute;
          bottom: 0rem;
          z-index: -1;
          &--2 {
            right: 4rem;
            top: 6rem;
          }
        }
      }
    }
    @media (max-width: 850px) {
      position: relative;
    }
  }
`;

const project = {
  uid: 'fourth-garden',
  name: 'Fourth Gaden',
  roles: 'Fullstack Developer, Consultant, Project Manager',
  industry: 'Academia',
  type: 'WebApp',
};

const FeatureProjectFourthGardenSection = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <div className='overlay'>
        <motion.div
          className='info'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
          variants={revealVariants}>
          <FeatureProjectHeader project={project} />
          <div className='lead'>
            <motion.p
              custom={0}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}>
              Using AI and artistic reinterpretations of the campus of Dutch Jan
              Van Eyck Academy for one week, the browser turned into a vivid
              meta garden. Built with Jitsi and Chatmosphere.
            </motion.p>
          </div>
          <div className='presentation'>
            <motion.div
              custom={1}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='plants plants--1'>
              <img
                src={'/images/feature-jve-plants-1.png'}
                alt={'Plants'}
              />
            </motion.div>
            <motion.div
              custom={3}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='plants plants--2'>
              <img
                src={'/images/feature-jve-plants-2.png'}
                alt={'Plants'}
              />
            </motion.div>
            <motion.div
              custom={2}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='image image--1'>
              <img
                src={'/images/feature-jve-1.png'}
                alt={'JVE - Desktop view'}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
};

export default FeatureProjectFourthGardenSection;
