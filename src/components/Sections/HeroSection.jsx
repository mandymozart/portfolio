import React from 'react';

import styled from '@emotion/styled';
import { BREAKPOINT_MD, BREAKPOINT_XS } from '../../../config';

const Container = styled.section`
  position: relative;
    min-height: 100vh;
   max-width: var(--content-width);
   margin: 0 auto;
   scroll-snap-align: start;
   h1 {
    padding: 0 var(--grid-padding);
    text-align: left;
    font-weight: 400;
    font-size: 4rem;
    @media (max-width: ${BREAKPOINT_XS}) {
      font-size: 2rem;
      padding: 0;
    }
  }

    @media (max-width: ${BREAKPOINT_MD}) {
      margin: 6rem;
    }
    @media (max-width: ${BREAKPOINT_XS}) {
      margin: 1rem;
    }
`;

const HeroSection = ({ ...props }) => {
  return (
    <Container {...props}>
        <h1 className='title'>
          I am Tilman Porschütz, a Vienna based developer crafting both <i>functional</i> and <i>unique</i> <b>UX/UI</b> for the web.
        </h1>
    </Container>
  );
};

export default HeroSection;
