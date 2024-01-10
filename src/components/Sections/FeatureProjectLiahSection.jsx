import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { staggerVariants } from './../../animations/site';

const Container = styled.section`
  position: relative;
  font-family: var(--font-mono);
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
          viewport={{ once: true, amount: 0.8 }}>
          <FeatureProjectHeader project={project} />
          <div className='presentation'>
            <div className='lead'>
              <motion.p
                custom={0}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                Transnational furniture shop and configurator.
              </motion.p>
              <motion.p
                custom={1}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                Quality made in Switzerland.
              </motion.p>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className='presentation'>
            <div></div>
            <motion.div
              className='image image--1'
              initial='offscreen'
              whileInView='onscreen'
              custom={0}
              variants={staggerVariants}>
              <img
                src={'/images/feature-liah-1.png'}
                alt={'LiAH - Browser view'}
              />
            </motion.div>
            <motion.div
              className='image image--2'
              initial='offscreen'
              whileInView='onscreen'
              custom={0}
              variants={staggerVariants}>
              <img
                src={'/images/feature-liah-2.png'}
                alt={'LiAH - Mobile view'}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
};

export default FeatureProjectLiahSection;
