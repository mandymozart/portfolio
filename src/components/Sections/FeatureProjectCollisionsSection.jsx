import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { revealVariants, staggerVariants } from './../../animations/site';

import { getSectionByKey } from './../Home/sections';

const project = {
  uid: 'collisions-munich',
  name: 'Collisions Munich',
  roles: 'Consultant, VFX, Frontend Developer',
  industry: 'Arts & Culture',
  type: 'WebApp',
};
const params = getSectionByKey('collisions-munich');

const Container = styled.section`
  background-color: ${params.backgroundColor};
  color: ${params.color};
  position: relative;
  font-family: var(--font);
  height: 200vh;
  .backdrop {
    width: 100%;
    object-fit: cover;
    height: 200vh;
    object-position: center;
    z-index: -1;
  }

  .overlay {
    width: 100%;
    z-index: 2;
    position: absolute;
    max-width: var(--content-width);
    margin: 0 auto;
    top: 0;
    left: 0;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--background);

      .lead {
        padding: 0 var(--grid-padding);
        display: grid;
        height: calc(100vh - var(--feature-project-header-height));
        align-items: center;
        grid-template-columns: 4fr 2fr;
        p {
          font-size: 3rem;
          line-height: 4rem;
        }
        @media (max-width: 850px) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
        }
      }
      .presentation {
        display: grid;
        color: var(--background);
        height: 100vh;
        align-items: center;
        grid-template-columns: 1fr 1fr 3fr 1fr;
        @media (max-width: 850px) {
          grid-template-columns: 1fr;
        }
        .image {
          padding: 0 var(--grid-padding);
          &--1 {
            grid-column: 2;
            @media (max-width: 850px) {
              display: none;
            }
          }
          &--2 {
            @media (max-width: 850px) {
            }
          }
          img {
            width: 100%;
            border-radius: 2rem;
          }
        }
      }
    }
    @media (max-width: 850px) {
      position: relative;
    }
  }
`;

const FeatureProjectCollisionsSection = () => {
  return (
    <Container>
      <motion.img
        custom={2}
        initial='offscreen'
        whileInView='onscreen'
        variants={staggerVariants}
        className='backdrop'
        src='/images/feature-collisions-background-placeholder.jpg'
        alt='Video Placeholder'
      />
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
              By visualizing dark matter research with web based particle
              effects, this web app became a participating artist itself.
            </motion.p>
          </div>
          <div className='presentation'>
            <motion.div
              className='image image--1'
              custom={1}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}>
              <img
                src={'/images/feature-collisions-2.png'}
                alt={'Collisions - Mobile view'}
              />
            </motion.div>
            <motion.div
              className='image image--2'
              custom={2}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}>
              <img
                src={'/images/feature-collisions-1.png'}
                alt={'Collisions - Desktop view'}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default FeatureProjectCollisionsSection;
