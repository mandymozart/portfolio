import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { revealVariants, staggerVariants } from './../../animations/site';

const Container = styled.section`
  position: relative;
  font-family: var(--font);

  max-width: var(--content-width);
  height: 200vh;
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
        height: calc(100vh - var(--feature-project-header-height));
        align-items: center;
        grid-template-columns: 3fr 3fr;
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
        grid-template-columns: 3fr 3fr;
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
      .red {
        color: var(--secondary);
      }
    }
    @media (max-width: 850px) {
      position: relative;
    }
  }
`;

const project = {
  uid: 'naivesandvisionaries',
  name: 'Naives & Visionaries',
  roles: 'Fullstack Developer',
  industry: 'Publishing',
  type: 'eCommerce',
};

const FeatureProjectNaivesAndVisionariesSection = ({ children, ...props }) => {
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
            <div>
              <motion.p
                custom={0}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                [1]<span className='red'>*</span> <i>bad design</i> = good
                design
              </motion.p>
              <motion.p
                custom={1}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                Stefan Sargemeister desciple Manuel Bürger & artist Sebastian
                Haslauer entrusted me in bringing their vision of an Emirates
                inspired WooCommerce shop for their publishing house to life.{' '}
              </motion.p>
            </div>
          </div>
          <div className='presentation'>
            <motion.div
              className='image image--1'
              custom={2}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}>
              <img
                src={'/images/feature-naivesandvisionaries-1.png'}
                alt={'Naives & Visionaries - Browser view'}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {children}
    </Container>
  );
};

export default FeatureProjectNaivesAndVisionariesSection;
