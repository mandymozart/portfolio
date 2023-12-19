import { PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import React, { Suspense } from 'react';
import { HomeExperience } from '../components/Home/HomeExperience';
import { HomeInterface } from '../components/Home/HomeInterface';
function HomePage() {
  const PAGES = 16; // count of slices

  return (
    <>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[0, 2, 12]}
          fov={42}
        />
        <ScrollControls pages={PAGES}>
          <Suspense>
            <HomeExperience />
            <Scroll html>
              <HomeInterface />
            </Scroll>
          </Suspense>
        </ScrollControls>
        {/* <Stats /> */}
        <Leva
          collapsed
          hidden
        />
      </Canvas>
    </>
  );
}

export default HomePage;
