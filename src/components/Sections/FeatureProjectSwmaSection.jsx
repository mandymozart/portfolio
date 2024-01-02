import styled from '@emotion/styled';
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
        grid-template-columns: 3fr 3fr;
        p {
          font-size: 3rem;
          line-height: 4rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 850px) {
          padding: 0 var(--grid-padding) 1rem var(--grid-padding);
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
  uid: 'swma',
  name: 'SWMA',
  roles: 'Frontend Developer',
  industry: 'Lifestyle',
  type: 'eCommerce',
};

const FeatureProjectSwmaSection = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <div className='overlay'>
        <div className='info'>
          <FeatureProjectHeader project={project} />
          <div className='lead'>
            <p>
              Design centric portfolio, magazine and online Shopify shop for
              Stuttgart based brand.
            </p>
          </div>
          <div className='presentation'>
            <div className='image image--1'>
              <img
                src={'/images/feature-swma-1.png'}
                alt={'SWAM - Mobile view'}
              />
            </div>
            <div className='image image--2'>
              <img
                src={'/images/feature-swma-2.png'}
                alt={'SWAM - Mobile view'}
              />
            </div>
            <div className='image image--3'>
              <img
                src={'/images/feature-swma-3.png'}
                alt={'SWAM - Mobile view'}
              />
            </div>
            <div className='image image--4'>
              <img
                src={'/images/feature-swma-4.png'}
                alt={'SWAM - Mobile view'}
              />
            </div>
            <div className='image image--5'>
              <img
                src={'/images/feature-swma-5.png'}
                alt={'SWAM - Mobile view'}
              />
            </div>
            <div className='image image--6'>
              <img
                src={'/images/feature-swma-6.png'}
                alt={'SWAM - Mobile view'}
              />
            </div>
          </div>
        </div>
      </div>
      {children}
    </Container>
  );
};

export default FeatureProjectSwmaSection;
