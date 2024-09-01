import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { BREAKPOINT_MD, BREAKPOINT_XS } from '../../../config';
import { staggerVariants } from '../../animations/site';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
const Container = styled.section`
  position: relative;
  font-family: var(--font);

  max-width: var(--content-width);
  margin: 0 auto;
  .overlay {
    width: 100%;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .presentation {
        display: grid;
        height: 100vh;
        grid-template-columns: 4fr 2fr;
        &--first {
          height: calc(100vh - var(--feature-project-header-height));
        }
        @media (max-width: ${BREAKPOINT_MD}) {
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
            @media (max-width: ${BREAKPOINT_XS}) {
              font-size: 2rem;
            line-height: 2.5rem;
            }
          }
          @media (max-width: ${BREAKPOINT_MD}) {
            padding: 0 var(--grid-padding) 1rem var(--grid-padding);
          }
        }
      }
    }
    @media (max-width: ${BREAKPOINT_XS}) {
      position: relative;
    }
  }
`;

const project = {
  uid: 'resradio-2',
  name: 'ResRadio',
  roles: 'Fullstack Developer, Consultant',
  industry: 'Arts & Culture',
  type: 'WebApp',
};

const FeatureProjectResRadio2Section = forwardRef(({ ...props },ref) => {
  return (
    <Container {...props}  ref={ref}>
      <div className='overlay'>
        <motion.div
          className='info'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}>
          <FeatureProjectHeader project={project} />
          <div className='presentation presentation--first'>
            <div></div>
            <div className='lead'>
              <motion.p
                custom={2}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                Brutalist design meets scaleability.
              </motion.p>
            </div>
          </div>
          <div className='presentation '>
            <motion.div
              className='image'
              initial='offscreen'
              whileInView='onscreen'
              custom={0}
              variants={staggerVariants}>
              <img
                src={'/images/resradio-2-feature-1.avif'}
                alt={'ResRadio'}
              />
            </motion.div>
            <div className='lead'>
              <motion.p
                custom={1}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                <i>Let's go JamStack!</i> &mdash; <b>real contemporary</b>{' '}
                webradio website and back-office in the cloud.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
});

export default FeatureProjectResRadio2Section;
