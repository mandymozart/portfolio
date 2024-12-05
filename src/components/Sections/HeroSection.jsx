import React, { forwardRef } from "react";

import styled from "@emotion/styled";
import { BREAKPOINT_MD, BREAKPOINT_XS } from "../../../config";

const Container = styled.section`
  position: relative;
  min-height: 100vh;
  max-width: var(--content-width);
  display: grid;
  grid-template-columns: 4fr 2fr;
  margin: 0 auto;
  gap: var(--grid-padding);
  @media (max-width: ${BREAKPOINT_MD}) {
    margin: 6rem;
    display: block;
  }
  @media (max-width: ${BREAKPOINT_XS}) {
    margin: 1rem;
  }
  div {
    padding: 0 var(--grid-padding);
    h1 {
      text-align: left;
      font-weight: 400;
      font-size: 3rem;
      @media (max-width: ${BREAKPOINT_XS}) {
        font-size: 2rem;
        padding: 0;
      }
    }
  }
`;

const HeroSection = forwardRef(({ ...props }, ref) => {
  return (
    <Container {...props} ref={ref}>
      <div>
        <h1 className="title">
          I am Tilman Porschütz, a Vienna based designer crafting both{" "}
          <i>functional</i> and <i>impactful</i> <b>UX/UI</b> for the web,
          humanity and all beings.
        </h1>
      </div>
    </Container>
  );
});

export default HeroSection;
