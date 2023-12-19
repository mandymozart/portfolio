import styled from '@emotion/styled';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { foodItems } from '../../../mockData/food';

const Container = styled.section`
  .page {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .introduction {
    padding-top: 25vh;
  }

  .introduction__label {
    font-size: 1.5rem;
    text-align: center;
    line-height: 3rem;
  }

  .food {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    border-radius: 0.5rem;
    padding: 2rem;
    width: 420px;
    max-width: 100%;
  }
`;

export const Interface = () => {
  const introductionRef = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    introductionRef.current.style.opacity = 1 - scrollData.range(0, 0.1);
  });

  return (
    <Container>
      <section
        className='page'
        ref={introductionRef}
      >
        <div className='introduction'>
          <p className='introduction__label'>
            I am Tilman Porschütz, a Vienna based creative developer crafting
            boutique experiences, websites and apps.
            <br />
          </p>
        </div>
      </section>
      {foodItems.map((foodItem, index) => (
        <section
          key={index}
          className='page'
        >
          <div className='food'>
            <h2 className='food__title'>{foodItem.name}</h2>
            <p className='food__description'>{foodItem.description}</p>
          </div>
        </section>
      ))}
    </Container>
  );
};
