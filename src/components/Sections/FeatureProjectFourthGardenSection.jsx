import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { BREAKPOINT_XS } from '../../../config';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { revealVariants, staggerVariants } from './../../animations/site';

const Container = styled.section`
  position: relative;
  font-family: var(--font);
  min-height: 200vh;

  max-width: var(--content-width);
  margin: 0 auto;
  @media (max-width: ${BREAKPOINT_XS}) {
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
          @media (max-width: ${BREAKPOINT_XS}) {
            grid-column: 1 / span 6;
            font-size: 2rem;
          line-height: 2.5rem;
        
          }
        }
        @media (max-width: ${BREAKPOINT_XS}) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
        }
      }
      .presentation {
        display: grid;
        height: 100vh;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
        min-height: calc(100vh - var(--feature-project-header-height));
        @media (max-width: ${BREAKPOINT_XS}) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .image {
          grid-column: 2 / span 4;
          padding: 0 var(--grid-padding);
          @media (max-width: ${BREAKPOINT_XS}) {
            grid-column: 1 / span 6;
          }
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
    @media (max-width: ${BREAKPOINT_XS}) {
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

const FeatureProjectFourthGardenSection = forwardRef(({ children, ...props },ref) => {
  return (
    <Container {...props}  ref={ref}>
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
                src={'/images/feature-jve-plants-1.avif'}
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
                src={'/images/feature-jve-plants-2.avif'}
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
                src={'/images/feature-jve-1.avif'}
                alt={'JVE - Desktop view'}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
});

export default FeatureProjectFourthGardenSection;
