import styled from '@emotion/styled';
import { forwardRef } from 'react';
import {
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XS,
  BREAKPOINT_XXS,
} from './../../../config';
import Footer from './../../components/Footer/Footer';

const Container = styled.div`
  height: 100vh;
  background: var(--perfume);
  color: var(--background);
  /* border-radius: 4rem 4rem 0 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .body {
    display: grid;
    grid-template-columns: 2fr 4fr;
    max-width: var(--content-width);
    margin: 0 auto;
    @media (max-width: ${BREAKPOINT_SM}) {
      display: block;
    }

    .inner {
      margin-top: 6rem;
      padding: 0 var(--grid-padding);
      @media (max-width: ${BREAKPOINT_SM}) {
        margin-top: 0;
        padding: 0 var(--grid-padding);
      }
      @media (max-width: ${BREAKPOINT_XS}) {
        margin-bottom: 4rem;
      }
      h3 {
        font-size: 4rem;
        @media (max-width: ${BREAKPOINT_MD}) {
          padding: 8rem 0;
        }
        @media (max-width: ${BREAKPOINT_SM}) {
          padding: 6rem 0;
        }
        @media (max-width: ${BREAKPOINT_XS}) {
          padding: 4rem 0;
          font-size: 3rem;
        }
        @media (max-width: ${BREAKPOINT_XXS}) {
        }
      }

      p {
        font-size: 2.25rem;
        line-height: 2.5rem;
        @media (max-width: ${BREAKPOINT_XS}) {
          font-size: 1.25rem;
          line-height: 2rem;
          margin: 0;
        }
      }
      a {
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
`;

const ContactSection = forwardRef((_,ref) => {
  return (
    <Container ref={ref}>
      <div className='body'>
        <div className='inner'>
          <h3>Let&apos;s work together!</h3>
          <p>
            Please reach out for jobs, contracts and collaborations. I am very
            friendly and excited to hear from you.
            <br />
            <br />
            <a href='mailto:tilman@porschuetz.de'>Contact</a>
          </p>
        </div>
      </div>
      <Footer />
    </Container>
  );
});

export default ContactSection;
