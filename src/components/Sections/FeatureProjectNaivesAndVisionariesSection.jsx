import { revealVariants } from '@/animations/site';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';

const Container = styled.section`
  position: relative;
  font-family: var(--font-mono);
  height: 100vh;
  max-width: var(--content-width);
  margin: 0 auto;
  @media (max-width: 850px) {
    height: 100vh;
  }

  .overlay {
    width: 100%;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      .presentation {
        margin-top: 3rem;
        display: grid;
        height: 100%;
        align-items: center;
        grid-template-columns: 3fr 3fr;
        @media (max-width: 850px) {
          grid-template-columns: 1fr;
        }
        .image {
          padding: 0 var(--grid-padding);
          img {
            width: 100%;
            border-radius: 2rem;
          }
        }
        .lead {
          padding: 0 var(--grid-padding);
          p {
            font-size: 3rem;
            line-height: 4rem;
            margin-bottom: 4rem;
          }
          @media (max-width: 850px) {
            padding: 0 var(--grid-padding) 1rem var(--grid-padding);
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
          variants={revealVariants}
        >
          <FeatureProjectHeader project={project} />
          <div className='presentation'>
            <div className='lead'>
              <p>
                Stefan Sargemeister desciple Manuel Bürger & artist Sebastian
                Haslauer entrusted me in bringing to live their vision of an
                Emirates inspired WooCommerce shop for their publishing house—in
                the process breaking more than one “good idea” of web design.
              </p>
            </div>
            <div className='image image--1'>
              <img
                src={'/images/feature-naivesandvisionaries-1.png'}
                alt={'Naives & Visionaries - Browser view'}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {children}
    </Container>
  );
};

export default FeatureProjectNaivesAndVisionariesSection;
