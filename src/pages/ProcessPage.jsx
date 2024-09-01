import styled from '@emotion/styled';
import {
  BREAKPOINT_L,
  BREAKPOINT_SM,
  BREAKPOINT_XS,
  BREAKPOINT_XXS
} from '../../config';
import ProcessSection from '../components/Sections/ProcessSection';

const Container = styled.div`
  width: var(--content-width);
  margin: 0 auto;
  @media (max-width: ${BREAKPOINT_L}) {
    width: auto;
  }
  @media (max-width: ${BREAKPOINT_XS}) {
  }
  h2 {
    padding: 8rem var(--grid-padding) 16rem var(--grid-padding);
    font-size: 12rem;
    color: var(--perfume);
    @media (max-width: ${BREAKPOINT_SM}) {
      font-size: 4rem;
      padding: 2rem var(--grid-padding) 2rem var(--grid-padding);
    }
    position: sticky;
    top: 6rem;
    z-index: -1;
  }
  h3 {
    @media (max-width: ${BREAKPOINT_XXS}) {
      > div {
        font-size: 3rem;
      }
    }
  }
  .body {
    
  }
`;

function ProcessPage() {
  return (
    <Container>
      <h2>Process</h2>
      <div className='body'>
        <ProcessSection />
        </div>
    </Container>
  );
}

export default ProcessPage;
