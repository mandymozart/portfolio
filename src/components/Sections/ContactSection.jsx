import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  height: 100vh;
  background: var(--primary);
  color: var(--background);
  border-radius: 4rem 4rem 0 0;
  .body {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    max-width: var(--content-width);
    margin: 0 auto;

    .inner {
      margin-top: 16rem;
      h3 {
        font-size: 6rem;
        margin-bottom: 6rem;
      }
      grid-column: 2 / span 1;
      p {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
      a {
        letter-spacing: 0.5rem;
        text-decoration: none;
      }
    }
  }
`;

const ContactSection = () => {
  return (
    <Container>
      <div className='body'>
        <div className='inner'>
          <h3>Let's work together!</h3>
          <p>
            Please reach out for jobs, contracts and collaborations. I am very
            friendly and excited to hear from you.
            <br />
            <br />
            <a href='mailto:tilman@porschuetz.de'>tilman@porschuetz.de</a>
            <br />
            <br />
            <a href='phone:+436608366059'>+43 66 0836 6059</a>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
