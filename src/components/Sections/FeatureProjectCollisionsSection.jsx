import { revealVariants } from '@/animations/site';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';

const Container = styled.section`
  position: relative;

  .backdrop {
    width: 100%;

    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

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
  uid: 'collisions-munich',
  name: 'Collisions Munich',
  roles: 'Consultant, VFX, Frontend Developer',
  industry: 'Arts & Culture',
  type: 'WebApp',
};

const FeatureProjectCollisionsSection = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <img
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
          variants={revealVariants}
        >
          <FeatureProjectHeader project={project} />
          <div className='lead'>
            <p>
              By visualizing dark matter research with web based particle
              effects, this web app became a participating artist itself.
            </p>
          </div>
          <div className='presentation'>
            <div className='image image--1'>
              <img
                src={'/images/feature-collisions-2.png'}
                alt={'Collisions - Mobile view'}
              />
            </div>
            <div className='image image--2'>
              <img
                src={'/images/feature-collisions-1.png'}
                alt={'Collisions - Desktop view'}
              />
            </div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
};

export default FeatureProjectCollisionsSection;
