import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { BREAKPOINT_MD, BREAKPOINT_XS } from '../../../config';
import VideoPlayer from '../Common/VideoPlayer/VideoPlayer';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { revealVariants } from './../../animations/site';

const Container = styled.section`
  position: relative;
  height: 200vh;
  position: relative;
  font-family: var(--font);

  max-width: var(--content-width);
  margin: 0 auto;
  .backdrop {
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 2rem;
  }

  .overlay {
    width: 100%;
    z-index: 2;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--background);

      .lead {
        padding: 0 var(--grid-padding);
        display: grid;
        height: calc(100vh - var(--feature-project-header-height));
        align-items: center;
        grid-template-columns: 4fr 2fr;
        p {
          font-size: 3rem;
          line-height: 4rem;
        }
        @media (max-width: ${BREAKPOINT_MD}) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
        }
      }
      .presentation {
        display: grid;
        height: 100vh;
        align-items: center;
        grid-template-columns: 1fr 3fr 1fr 1fr;
        @media (max-width: ${BREAKPOINT_MD}) {
          grid-template-columns: 1fr;
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
    @media (max-width: ${BREAKPOINT_XS}) {
      position: relative;
    }
  }
`;

const project = {
  uid: 'dogheartcity',
  name: 'Dog Heart City',
  roles: 'Frontend Developer, Visual Artist',
  industry: 'Arts & Culture',
  type: 'Marketing Game',
};

const FeatureProjectDogHeartCitySection = forwardRef(({ children, ...props },ref) => {
  return (
    <Container {...props} ref={ref}>
      <img
        className='backdrop'
        src='/images/feature-dogheartcity-background.avif'
        alt='Video Placeholder'
      />
      <div className='overlay'>
        <motion.div
          className='info'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
          variants={revealVariants}>
          <FeatureProjectHeader project={project} />
          <div className='lead'>
            <p>
              Help poet Roger Robinson to fend of the evil suit people in this
              London-themed dub game.
            </p>
          </div>
          <div className='presentation'>
            <div className='image image--1'>
              <VideoPlayer poster='/images/feature-dogheartcity-1.avif'>
                <source src='http://mandymozart.com/dev.mandymozart.com/cdn/dogheartcity.mov' />
              </VideoPlayer>
            </div>
            <div className='image image--2'>
              <img
                src={'/images/feature-dogheartcity-2.avif'}
                alt={'Dog Heart City - Mobile view'}
              />
            </div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
});

export default FeatureProjectDogHeartCitySection;
