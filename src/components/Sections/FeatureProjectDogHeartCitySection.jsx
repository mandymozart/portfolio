import styled from '@emotion/styled';
import React from 'react';
import useMenuStore from '../../stores/MenuStore';
import useProjectStore from '../../stores/ProjectStore';
import { FeatureProjectHeader } from '../FeatureProject/FeatureProjectHeader';

const Container = styled.section`
  position: relative;
  height: 100vh;
  .backdrop {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  a {
    font-family: var(--font-mono);
    max-width: var(--content-width);
    margin: 0 auto;
    color: var(--background);
    @media (max-width: 850px) {
      height: 100vh;
    }
    /* z-index: 2; */
    display: block;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background: none;
    }
    .overlay {
      width: 100%;
      z-index: 2;
      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
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
          grid-template-columns: 1fr 3fr 1fr 1fr;
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
  }
`;

const project = {
  uid: 'dogheartcity',
  name: 'Dog Heart City',
  roles: 'Frontend Developer, Visual Artist',
  industry: 'Arts & Culture',
  type: 'Marketing Game',
};

const FeatureProjectDogHeartCitySection = ({ children, ...props }) => {
  const setActiveProject = useProjectStore(state => state.setActiveProject);
  const setActiveMenuItem = useMenuStore(state => state.setActiveMenuItem);
  const navigateTo = uid => () => {
    setActiveMenuItem('project');
    setActiveProject(uid);
    console.log('navigateTo', uid);
  };
  return (
    <Container {...props}>
      <img
        className='backdrop'
        src='/images/feature-dogheartcity-background.jpg'
        alt='Video Placeholder'
      />
      <a
        href='#'
        onClick={navigateTo(project.uid)}
      >
        <div className='overlay'>
          <div className='info'>
            <FeatureProjectHeader project={project} />
            <div className='lead'>
              <p>
                Help Roger Robinson to fend of the evil suit people in this dub
                game.
              </p>
            </div>
            <div className='presentation'>
              <div className='image image--1'>
                <img
                  src={'/images/feature-dogheartcity-1.png'}
                  alt={'Dog Heart City - Desktop view // Video Placeholder'}
                />
              </div>
              <div className='image image--2'>
                <img
                  src={'/images/feature-dogheartcity-2.png'}
                  alt={'Dog Heart City - Mobile view'}
                />
              </div>
            </div>
          </div>
        </div>
      </a>
      {children}
    </Container>
  );
};

export default FeatureProjectDogHeartCitySection;
