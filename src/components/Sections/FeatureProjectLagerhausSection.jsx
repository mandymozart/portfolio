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
        margin-top: 3rem;
        display: grid;
        height: 100vh;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
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
      }
    }
    @media (max-width: 850px) {
      position: relative;
    }
  }
`;

const project = {
  uid: 'lagerhaus',
  name: 'Lagerhaus',
  roles: 'Frontend Developer, UX/UI Designer',
  industry: 'Retail',
  type: 'eCommerce',
};

const FeatureProjectLagerhausSection = () => {
  return (
    <Container>
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
              Cooperative B2C shop and content platform built on Bloomreach
              Experience and SAP Hybris.
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
                src={'/images/feature-lagerhaus-1.avif'}
                alt={'Lagerhaus - Mobile view'}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default FeatureProjectLagerhausSection;
