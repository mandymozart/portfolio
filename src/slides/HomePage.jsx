'use client';
import { Scroll, ScrollControls, SoftShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { getProject } from '@theatre/core';
import { SheetProvider } from '@theatre/r3f';
import extension from '@theatre/r3f/dist/extension';
import studio from '@theatre/studio';
import { Leva } from 'leva';
import { Suspense } from 'react';
import projectState from '../assets/Tour.theatre-project-state.json';
import { Interface } from '../components/Home/Interface';
import { Scene } from '../components/Home/Scene';
import { getSectionPageCount } from '../components/Home/sections';
export const isProd = import.meta.env.MODE === 'production';

if (!isProd) {
  studio.initialize();
  studio.extend(extension);
}

function HomePage() {
  const PAGES = getSectionPageCount(); // count of slices
  const mainSheet = getProject('Tour', {
    state: projectState,
  }).sheet('Scene');

  return (
    <>
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true }}
        // raycaster={{ params: { Line: { threshold: 0.15 } } }} // important for click events
      >
        <SoftShadows />
        {/* <OrbitControls makeDefault /> */}
        <ScrollControls pages={PAGES}>
          <Suspense>
            <SheetProvider sheet={mainSheet}>
              <Scene />
            </SheetProvider>
            <Scroll html>
              <Interface />
            </Scroll>
          </Suspense>
        </ScrollControls>
        {/* <Stats /> */}
        <Leva hidden />
      </Canvas>
    </>
  );
}

export default HomePage;
