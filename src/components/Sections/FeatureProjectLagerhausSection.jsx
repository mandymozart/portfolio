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
      .lead {
        padding: 0 var(--grid-padding);
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        p {
          font-size: 3rem;
          line-height: 4rem;
          margin-bottom: 4rem;
          grid-column: 2 / span 4;
        }
        @media (max-width: 850px) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
          grid-column: 1 / span 6;
        }
      }
      .presentation {
        margin-top: 3rem;
        display: grid;
        height: 100%;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
        @media (max-width: 850px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .image {
          grid-column: 2 / span 4;
          padding: 0 var(--grid-padding);
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
`;

const project = {
  uid: 'lagerhaus',
  name: 'Lagerhaus',
  roles: 'Frontend Developer, UX/UI Designer',
  industry: 'Retail',
  type: 'eCommerce',
};

const FeatureProjectLagerhausSection = ({ children, ...props }) => {
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
            <div className='lead'>
              <p>
                Cooperative B2C shop and content platform built on Bloomreach
                Experience and SAP Hybris.
              </p>
            </div>
            <div className='presentation'>
              <div className='image image--1'>
                <img
                  src={'/images/feature-lagerhaus-1.png'}
                  alt={'Lagerhaus - Mobile view'}
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

export default FeatureProjectLagerhausSection;
