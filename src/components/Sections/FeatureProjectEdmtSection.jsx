import { revealVariants } from '@/animations/site';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';

const Container = styled.section`
  position: relative;

  .overlay {
    width: 100%;
    z-index: 2;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .lead {
        padding: 0 var(--grid-padding);
        display: grid;
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
        height: 100%;
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
          variants={revealVariants}
        >
          <FeatureProjectHeader project={project} />
          <div className='lead'>
            <p className='text'>
              This award winning instrument, interface and visualizer creates
              entirely new cognitive connections in the human brain.
            </p>
            <div className='awards'>
              <p>
                First Price
                <br />
                App Art Award
                <br />
                ZKM Karlsruhe 2017
              </p>
              <img
                src='/images/feature-edmt-icon-app-art-award.png'
                alt='App Art Award'
              />
              <img
                src='/images/feature-edmt-icon-zkm.svg'
                alt='ZKM'
              />
            </div>
          </div>
          <div className='presentation'>
            <div className='image image--1'>
              <img
                src={'/images/feature-edmt-1.png'}
                alt={'EDMT - Mobile view'}
              />
            </div>
            <div className='image image--2'>
              <img
                src={'/images/feature-edmt-2.png'}
                alt={'EDMT - Desktop view'}
              />
            </div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
};

export default FeatureProjectEdmtSection;
