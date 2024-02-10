import styled from '@emotion/styled';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';

import { motion } from 'framer-motion';
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
        align-items: center;
        grid-template-columns: 3fr 3fr;
        height: calc(100vh - var(--feature-project-header-height));
        p {
          font-size: 3rem;
          line-height: 4rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 850px) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
        }
      }
      .presentation {
        height: 100vh;
        margin-top: 3rem;
        display: grid;
        height: 100%;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
        @media (max-width: 850px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .image {
          padding: 0 var(--grid-padding);
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

const project = {
  uid: 'swma',
  name: 'SWMA',
  roles: 'Frontend Developer',
  industry: 'Lifestyle',
  type: 'eCommerce',
};

const FeatureProjectSwmaSection = ({ children, ...props }) => {
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
              Design centric <i>portfolio, magazine and shop</i> for Stuttgart
              based brand.
            </motion.p>
          </div>
          <div className='presentation'>
            <motion.div
              custom={1}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='image image--1'>
              <img
                src={'/images/feature-swma-1.avif'}
                alt={'SWAM - Mobile view'}
              />
            </motion.div>
            <motion.div
              custom={2}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='image image--2'>
              <img
                src={'/images/feature-swma-2.avif'}
                alt={'SWAM - Mobile view'}
              />
            </motion.div>
            <motion.div
              custom={3}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='image image--3'>
              <img
                src={'/images/feature-swma-3.avif'}
                alt={'SWAM - Mobile view'}
              />
            </motion.div>
            <motion.div
              custom={4}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='image image--4'>
              <img
                src={'/images/feature-swma-4.avif'}
                alt={'SWAM - Mobile view'}
              />
            </motion.div>
            <motion.div
              custom={5}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='image image--5'>
              <img
                src={'/images/feature-swma-5.avif'}
                alt={'SWAM - Mobile view'}
              />
            </motion.div>
            <motion.div
              custom={6}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='image image--6'>
              <img
                src={'/images/feature-swma-6.avif'}
                alt={'SWAM - Mobile view'}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
};

export default FeatureProjectSwmaSection;
