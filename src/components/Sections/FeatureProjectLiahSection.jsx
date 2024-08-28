import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { BREAKPOINT_MD, BREAKPOINT_XS } from '../../../config';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { staggerVariants } from './../../animations/site';

const Container = styled.section`
  position: relative;
  font-family: var(--font);
  min-height: 200vh;
  max-width: var(--content-width);
  margin: 0 auto;
  @media (max-width: ${BREAKPOINT_MD}) {
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
        grid-template-columns: 2fr 4fr;
        p {
          font-size: 3rem;
          line-height: 4rem;
          @media (max-width: ${BREAKPOINT_MD}) {
              font-size: 2rem;
            line-height: 2.5rem;
            }
        }
        @media (max-width: ${BREAKPOINT_MD}) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
        }
      }
      .presentation {
        display: grid;
        color: var(--background);
        height: 100vh;
        align-items: center;
        grid-template-columns: 1fr 3fr 1fr 1fr;
        @media (max-width: ${BREAKPOINT_MD}) {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .image {
          padding: 0 var(--grid-padding);
          &--1 {
            grid-column: 2;
            @media (max-width: ${BREAKPOINT_XS}) {
              display: none;
            }
          }
          &--2 {
            @media (max-width: ${BREAKPOINT_XS}) {
            }
          }
          img {
            width: 100%;
            border-radius: 2rem;
          }
        }
      }
    }
    @media (max-width: ${BREAKPOINT_MD}) {
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

const FeatureProjectLiahSection = () => {
  return (
    <Container>
      <div className='overlay'>
        <motion.div
          className='info'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}>
          <FeatureProjectHeader project={project} />
          <div className='lead'>
            <div>
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
          </div>

          <div className='presentation'>
            <div></div>
            <motion.div
              className='image image--1'
              initial='offscreen'
              whileInView='onscreen'
              custom={2}
              variants={staggerVariants}>
              <img
                src={'/images/feature-liah-1.avif'}
                alt={'LiAH - Browser view'}
              />
            </motion.div>
            <motion.div
              className='image image--2'
              initial='offscreen'
              whileInView='onscreen'
              custom={3}
              variants={staggerVariants}>
              <img
                src={'/images/feature-liah-2.avif'}
                alt={'LiAH - Mobile view'}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default FeatureProjectLiahSection;
