import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';
import VideoPop from 'react-video-pop';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { staggerVariants } from './../../animations/site';

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
        grid-template-columns: 4fr 2fr;
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
  uid: 'resradio-2',
  name: 'ResRadio',
  roles: 'Fullstack Developer, Consultant',
  industry: 'Arts & Culture',
  type: 'WebApp',
};

const FeatureProjectResRadio2Section: FC = ({ ...props }) => {
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
            <motion.div
              className='image'
              initial='offscreen'
              whileInView='onscreen'
              custom={0}
              variants={staggerVariants}>
              <img
                src={'/images/resradio-2-feature-1.png'}
                alt={'ResRadio'}
              />
            </motion.div>
            <div className='lead'>
              <motion.p
                custom={1}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                A contemporary webradio website and back-office in React on top
                of Mixlr, Sanity, Prismic, Ably, Github and Netlify.
              </motion.p>
              <motion.p
                custom={2}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                Brutalist design meets scaleability.
              </motion.p>
              <motion.button
                custom={3}
                variants={staggerVariants}
                initial='offscreen'
                whileInView='onscreen'>
                Play reaction
                <VideoPop />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default FeatureProjectResRadio2Section;
