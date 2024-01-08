'use client';
import { Scroll, ScrollControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { HomeExperience } from '../components/Home/HomeExperience';
import { HomeInterface } from '../components/Home/HomeInterface';

function HomePage() {
  const PAGES = 16; // count of slices

  return (
    <>
      <Canvas
        shadows={'soft'}
        raycaster={{ params: { Line: { threshold: 0.15 } } }}
        camera={{ fov: 50, near: 0.1, far: 200, position: [0, 20, 60] }}
        fog={'true'}
      >
        {/* <OrbitControls makeDefault /> */}
        <ScrollControls pages={PAGES}>
          <Suspense>
            <HomeExperience />
            <Scroll html>
              <HomeInterface />
            </Scroll>
          </Suspense>
        </ScrollControls>
        <Stats />
        {/* <Leva /> */}
      </Canvas>
    </>
  );
}

export default HomePage;
