import styled from '@emotion/styled';
import { PrismicImage } from '@prismicio/react';

const Container = styled.div`
  /* Add your styles here */
  section {
    margin: 0 var(--content-margin-left);
    max-width: var(--content-width);
    position: relative;
    height: 100vh;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: fill;
    }
  }
`;

const ScreenshotsSection = ({ screenshots }) => {
  if (!screenshots) return null;
  return (
    <Container>
      {screenshots &&
        screenshots.length > 0 &&
        screenshots.map((item, index) => (
          <section key={index}>
            {item.desktop && (
              <PrismicImage
                className='screenshot hidden--mobile'
                field={item.desktop}
              />
            )}
            {item.mobile && (
              <PrismicImage
                className='screenshot hidden--desktop hidden--tablet'
                field={item.mobile}
              />
            )}
            {item.image && (
              <PrismicImage
                className='screenshot'
                field={item.image}
              />
            )}
          </section>
        ))}
    </Container>
  );
};

export default ScreenshotsSection;
