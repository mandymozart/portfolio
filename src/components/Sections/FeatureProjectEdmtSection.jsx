import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { revealVariants, staggerVariants } from './../../animations/site';

const Container = styled.section`
  .overlay {
    position: relative;
    max-width: var(--content-width);
    margin: 0 auto;
    width: 100%;
    z-index: 2;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .lead {
        padding: 0 var(--grid-padding);
        display: grid;
        height: calc(100vh - var(--feature-project-header-height));
        align-items: center;
        grid-template-columns: 4fr 1fr 1fr;
        p.text {
          font-size: 3rem;
          line-height: 4rem;
        }
        .awards {
          grid-column: 3 / span 1;
          p {
            font-size: 1rem;
            line-height: 1.5rem;
            margin-bottom: 1rem;
          }
          img {
            max-width: 100%;
            margin-bottom: 1rem;
          }
        }
        @media (max-width: 850px) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
        }
      }
      .presentation {
        display: grid;
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

const project = {
  uid: 'edmt',
  name: 'EDMT',
  roles: 'Fullstack Developer, Sound Design, Project Management',
  industry: 'Arts & Culture',
  type: 'Mobile App',
};

const FeatureProjectEdmtSection = ({ children, ...props }) => {
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
              variants={staggerVariants}
              className='text'>
              This award winning instrument, interface and visualizer creates
              entirely new cognitive connections in the <i>human brain</i>.
            </motion.p>
            <div className='awards'>
              <motion.p
                custom={0}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                First Price
                <br />
                App Art Award
                <br />
                ZKM Karlsruhe 2017
              </motion.p>
              <motion.img
                custom={0}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}
                src='/images/feature-edmt-icon-app-art-award.png'
                alt='App Art Award'
              />
              <motion.img
                custom={0}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}
                src='/images/feature-edmt-icon-zkm.svg'
                alt='ZKM'
              />
            </div>
          </div>
          <div className='presentation'>
            <motion.div
              className='image image--1'
              custom={1}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}>
              <img
                src={'/images/feature-edmt-1.png'}
                alt={'EDMT - Mobile view'}
              />
            </motion.div>
            <motion.div
              className='image image--2'
              custom={1}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}>
              <img
                src={'/images/feature-edmt-2.png'}
                alt={'EDMT - Desktop view'}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
};

export default FeatureProjectEdmtSection;
