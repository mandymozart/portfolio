'use client';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import ProjectThumbnailList from '../components/Project/ProjectThumbnailList';
import useProjectsStore from '../stores/ProjectsStore';

const Container = styled.div`
  /* Add your styles here */
  margin-top: var(--header-height);
  .experiments {
    border-radius: 4rem;

    margin: 0 auto;
    width: var(--content-width);
    padding: var(--grid-padding);
    p {
      font-size: 2rem;
      text-indent: 6rem;
    }
    h3 {
      font-size: 4rem;
    }
  }
`;

function ProjectsPage() {
  const { projects } = useProjectsStore();

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: '10rem', behavior: 'smooth' });
    }
  }, [projects]);
  return (
    <Container ref={ref}>
      <ProjectThumbnailList />
      {/* <section className='experiments'>
        <div>
          <h3>That's all?</h3>
          <p>
            Of course not! Lot's has been lost to the ether or hungry investment
            traps for good or bad. If you are really interested just ask me for
            more stuff. My passion for web and code goes back to the early days
            of the internet as far as 1998. The glorious first 10 years full of
            creativity. Which came to an aprupt end by the rise of social media
            and platformism. I might some day do a retro portfolio and add some
            gems ;)
          </p>
          <h3>New times, new challanges! </h3>
          <p>
            I threw together this portfolio to show off, that you can throw any
            technology at me and I make it mine!
          </p>
          <h3>What projects interest me?</h3>
          <p>
            Large scale design systems and XR. This is where I can bring in my
            experience in engineering, spatial story telling, theater, the body
            and how to handle tripping once reality is not what it seems
            anymore.
          </p>
        </div>
      </section> */}
    </Container>
  );
}

export default ProjectsPage;
