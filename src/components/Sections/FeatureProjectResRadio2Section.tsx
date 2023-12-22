import { emitRouteChange } from '@/events/routerEvents';
import useMonoSynth from '@/hooks/useMonoSynth';
import { routes } from '@/slideInRoutes';
import styled from '@emotion/styled';
import { FC } from 'react';
import useMenuStore from '../../stores/MenuStore';
import useProjectStore from '../../stores/ProjectStore';
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
  a {
    z-index: 2;
    display: block;
    color: var(--primary);
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background: none;
    }
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
  const setActiveProject = useProjectStore(state => state.setActiveProject);
  const setActiveMenuItem = useMenuStore(state => state.setActiveMenuItem);

  const { playToneAtRoute } = useMonoSynth();

  function navigateTo(uid: string) {
    console.log('navigateTo', uid);
    playToneAtRoute(routes.PROJECT.key);
    emitRouteChange({ to: routes.PROJECT });
    setActiveMenuItem(routes.PROJECT);
    setActiveProject(uid);
  }

  return (
    <Container {...props}>
      {/* <img
          src={slice.primary.background.url}
          alt='background'
        /> */}

      <a
        href='#'
        onClick={() => navigateTo(project.uid)}
      >
        <div className='overlay'>
          <div className='info'>
            <FeatureProjectHeader project={project} />
            <div className='presentation'>
              <div className='image'>
                <img
                  src={'/images/resradio-2-feature-1.png'}
                  alt={'ResRadio'}
                />
              </div>
              <div className='lead'>
                <p>
                  A contemporary webradio website and back-office in React on
                  top of Mixlr, Sanity, Prismic, Ably, Github and Netlify.
                </p>
                <p>Brutalist design meets scaleability.</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Container>
  );
};

export default FeatureProjectResRadio2Section;
