import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { BREAKPOINT_MD, BREAKPOINT_XS } from '../../../config';
import VideoPlayer from '../Common/VideoPlayer/VideoPlayer';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';
import { revealVariants, staggerVariants } from './../../animations/site';

const Container = styled.section`
  position: relative;
  .overlay {
    position: relative;
    max-width: var(--content-width);
    margin: 0 auto;
    width: 100%;
    z-index: 2;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .lead {
        padding: 0 var(--grid-padding);
        display: grid;
        min-height: calc(100vh - var(--feature-project-header-height));
        align-items: center;
        grid-template-columns: 4fr 1fr 1fr;
        @media (max-width: ${BREAKPOINT_XS}) {
          display: block;
        }
        p.text {
          font-size: 3rem;
          line-height: 4rem;
          @media (max-width: ${BREAKPOINT_XS}) {
              font-size: 2rem;
            line-height: 2.5rem;
            }
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
        @media (max-width: ${BREAKPOINT_MD}) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
        }
      }
      .presentation {
        display: grid;
        min-height: 100vh;
        align-items: center;
        grid-template-columns: 1fr 1fr 3fr 1fr;
        @media (max-width: ${BREAKPOINT_MD}) {
          grid-template-columns: 1fr;
                  }
        .image {
          padding: 0 var(--grid-padding);
          &--1 {
            grid-column: 2;
            @media (max-width: ${BREAKPOINT_MD}) {
              display: none;
            }
          }
          img {
            width: 100%;
            border-radius: 2rem;
          }
        }
        .video {
          padding: 0 var(--grid-padding);
          &-player {
            position: relative;
            img,
            video {
              width: 100%;
              height: 100%;
              border-radius: 2rem;
              overflow: hidden;
            }
            .video-placeholder {
              border-radius: 2rem;
              overflow: hidden;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              display: flex;
              justify-content: center;
              transition: opacity 0.3s ease;
              &-overlay {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                display: flex;
                align-content: center;
                justify-content: center;
                .play-button {
                }
              }
            }
            &--playing {
              .video-placeholder {
                opacity: 0;
                pointer-events: none;
              }
            }
            &--hovered {
              .video-placeholder {
                opacity: 1;
                pointer-events: all;
              }
            }
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
          variants={revealVariants}>
          <FeatureProjectHeader project={project} />
          <div className='lead'>
            <motion.p
              custom={0}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}
              className='text'>
              This award winning instrument, interface and visualizer creates
              entirely new cognitive connections in the <i>human brain</i>.
            </motion.p>
            <div className='awards'>
              <motion.p
                custom={0}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}>
                First Price
                <br />
                App Art Award
                <br />
                ZKM Karlsruhe 2017
              </motion.p>
              <motion.img
                custom={0}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}
                src='/images/feature-edmt-icon-app-art-award.avif'
                alt='App Art Award'
              />
              <motion.img
                custom={1}
                initial='offscreen'
                whileInView='onscreen'
                variants={staggerVariants}
                src='/images/feature-edmt-icon-zkm.svg'
                alt='ZKM'
              />
            </div>
          </div>
          <div className='presentation'>
            <motion.div
              className='image image--1'
              custom={2}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}>
              <img
                src={'/images/feature-edmt-1.avif'}
                alt={'EDMT - Mobile view'}
              />
            </motion.div>
            <motion.div
              className='video video--1'
              custom={3}
              initial='offscreen'
              whileInView='onscreen'
              variants={staggerVariants}>
              {/* <YouTube
                   videoId='3SKECihPefU'
                   opts={opts}/> */}
              <VideoPlayer poster='/images/feature-edmt-2.avif'>
                <source
                  src='/videos/edmt-1080p.mp4'
                  type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                />
                <source
                  src='/videos/edmt-720p.mp4'
                  type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                />
              </VideoPlayer>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {children}
    </Container>
  );
};

export default FeatureProjectEdmtSection;
