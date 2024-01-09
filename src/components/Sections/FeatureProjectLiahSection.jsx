import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { revealVariants } from './../../animations/site';

const Container = styled.section`
  position: relative;
  font-family: var(--font-mono);

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

      .presentation {
        margin-top: 3rem;
        display: grid;
        height: 100%;
        align-items: center;
        grid-template-columns: 2fr 3fr 1fr;
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
  uid: 'liah',
  name: 'LiaH',
  roles: 'Requirements Engineer, Consultant, Frontend Developer',
  industry: 'Design',
  type: 'eCommerce',
};

const FeatureProjectLiahSection = ({ children, ...props }) => {
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
              <p>Transnational furniture shop and configurator.</p>
              <p>Quality made in Switzerland.</p>
            </div>
            <div className='image image--1'>
              <img
                src={'/images/feature-liah-1.png'}
                alt={'LiAH - Browser view'}
              />
            </div>
            <div className='image image--2'>
              <img
                src={'/images/feature-liah-2.png'}
                alt={'LiAH - Mobile view'}
              />
            </div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
};

export default FeatureProjectLiahSection;
