import styled from '@emotion/styled';
import {
  BREAKPOINT_L,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XS
} from '../../config';

const Container = styled.div`
  width: var(--content-width);
  margin: 0 auto;
  @media (max-width: ${BREAKPOINT_L}) {
    width: auto;
  }
  @media (max-width: ${BREAKPOINT_MD}) {
  }
  @media (max-width: ${BREAKPOINT_SM}) {
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
  }
`;

function NotFoundPage() {
  return (
    <Container>
      Not found
    </Container>
  );
}

export default NotFoundPage;
