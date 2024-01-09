'use client';
import { Scroll, ScrollControls, SoftShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { getProject } from '@theatre/core';
import { SheetProvider } from '@theatre/r3f';
import { Suspense } from 'react';
import { Interface } from '../components/Home/Interface';
import { Scene } from '../components/Home/Scene';

import extension from '@theatre/r3f/dist/extension';
import studio from '@theatre/studio';
import { Leva } from 'leva';
studio.extend(extension);
studio.initialize();

function HomePage({ route }) {
  const PAGES = 16; // count of slices
  const sheet = getProject('Tour').sheet('Scene');

  return (
    <>
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true }}
        raycaster={{ params: { Line: { threshold: 0.15 } } }} // important for click events
        // camera={{ fov: 42, near: 0.1, far: 200, position: [0, 20, 60] }}
        fog={'true'}
      >
        <SoftShadows />
        {/* <OrbitControls makeDefault /> */}
        <ScrollControls pages={PAGES}>
          <SheetProvider sheet={sheet}>
            <Suspense>
              <Scene />
              <Scroll html>
                <Interface />
              </Scroll>
            </Suspense>
          </SheetProvider>
        </ScrollControls>
        {/* <Stats /> */}
        <Leva hidden />
      </Canvas>
    </>
  );
}

export default HomePage;
