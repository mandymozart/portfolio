import { routes } from '@/slideInRoutes';
import styled from '@emotion/styled';
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
  const setActiveProject = useProjectStore(state => state.setActiveProject);
  const setActiveMenuItem = useMenuStore(state => state.setActiveMenuItem);
  const navigateTo = uid => () => {
    setActiveMenuItem(routes.PROJECT);
    setActiveProject(uid);
    console.log('navigateTo', uid);
  };
  return (
    <Container {...props}>
      <a
        href='#'
        onClick={navigateTo(project.uid)}
      >
        <div className='overlay'>
          <div className='info'>
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
          </div>
        </div>
      </a>
      {children}
    </Container>
  );
};

export default FeatureProjectLiahSection;
