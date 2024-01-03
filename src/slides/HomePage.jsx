'use client';
import {
  OrbitControls,
  Scroll,
  ScrollControls,
  Stats,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { HomeExperience } from '../components/Home/HomeExperience';
import { HomeInterface } from '../components/Home/HomeInterface';
function HomePage() {
  const PAGES = 16; // count of slices

  return (
    <>
      <Canvas
        shadows
        raycaster={{ params: { Line: { threshold: 0.15 } } }}
        camera={{ position: [0, 2, 12], fov: 42 }}
      >
        <OrbitControls makeDefault />
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
