import { KeyboardControls, useCursor, useScroll } from '@react-three/drei';

import {
  PerspectiveCamera,
  editable as e,
  useCurrentSheet,
} from '@theatre/r3f';

import { useFrame } from '@react-three/fiber';
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { val } from '@theatre/core';
import { useControls } from 'leva';
import { useRef, useState } from 'react';
import { Vector3 } from 'three';
import { Avatar } from '../Avatar';
import { FireFlies } from '../Models/Home/FireFlies';
import { Island } from '../Models/Home/Island';
import { MountainAndRiver } from '../Models/Home/MountainAndRiver';
import { MovingClouds } from '../Models/Home/MovingClouds';
import { PointLight } from '../Models/Lights/PointLight';
import { RadioTower } from '../Models/RadioTower';
import { Slide } from '../Models/Slide';
import { TrashBag } from '../Models/TrashBag';
import useMenuStore from './../../stores/MenuStore';

export const GROUND = 1.15;

export const Scene = () => {
  const { colors, setColors, setScrollYProgress } = useMenuStore();

  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const cameraRef = useRef();
  const cameraTargetRef = useRef();
  const focusTargetRef = useRef(new Vector3(0, 0, 0));
  const focusTargetVisualizerRef = useRef();
  const fogRef = useRef();

  const planeMaterial = useRef();

  const [onFloor, setOnFloor] = useState(false);
  useCursor(onFloor);

  const envControls = useControls('ENVIRONMENT', {
    foreground: {
      value: colors.foreground,
      onChange: (color) => {
        // planeMaterial.current.color = color;
        setColors({ ...colors, foreground: color });
      },
    },
    background: {
      value: colors.background,
      onChange: (color) => {
        setColors({ ...colors, background: color });
      },
    },
  });

  const onPlaneClicked = (e) => {
    // console.log(e);
    // emitMove({
    //   path: [[e.point?.x, GROUND, e.point?.z]],
    //   action: AvatarActions.SWIM,
    // });
  };

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
    setScrollYProgress(scroll.offset);
  });

  // useFrame(() => {
  //   if (focusTargetVisualizerRef.current) {
  //     console.log(focusTargetVisualizerRef.current.position);
  //     focusTargetRef.current.copy(focusTargetVisualizerRef.current.position);
  //   }
  // });

  return (
    <>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
          { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
          { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
          { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
          { name: 'dance', keys: ['Space'] },
        ]}>
        <PerspectiveCamera
          makeDefault
          ref={cameraRef}
          theatreKey='Camera'
          fov={50}
          position={[20, 25.35, 18]}
          lookAt={cameraTargetRef}
        />
        <e.mesh
          theatreKey='Camera Target'
          visible='editor'
          ref={cameraTargetRef}>
          <sphereGeometry args={[0.1, 0]} />
          <meshPhongMaterial color='yellow' />
        </e.mesh>
        <PointLight />
        {/* <MovingSpot theatreKey='MovingSpot' /> */}
        <FireFlies />
        <mesh
          position={[0, GROUND, 0]}
          rotation-x={-Math.PI / 2}
          receiveShadow
          onDoubleClick={onPlaneClicked}
          onPointerEnter={() => setOnFloor(true)}
          onPointerLeave={() => setOnFloor(false)}>
          <planeGeometry args={[1000, 1000]} />
          <meshBasicMaterial color={colors.foreground} />
          {/* 
          This texture crashes the context
          <MeshReflectorMaterial
            ref={planeMaterial}
            color={colors.foreground}
            resolution={1024}
            mixStrength={10}
            roughness={1}
            mixBlur={0}
            blur={10}
            mirror={1}
            mixContrast={0.5}
          /> */}
        </mesh>
        <MountainAndRiver />
        <RadioTower />
        <Slide />
        <Avatar />
        <MovingClouds />
        <Island position={[0, 0, 0]} />
        <TrashBag
          position={[5, GROUND, 14]}
          scale={0.1}
        />
        <TrashBag
          position={[5, GROUND, 13]}
          scale={0.1}
          rotation={[0, 0.5, 0]}
        />
        <TrashBag
          position={[6, GROUND, 12]}
          scale={0.1}
          rotation={[0, 1, 0]}
        />
        <TrashBag
          position={[7, GROUND, 14]}
          scale={0.1}
        />
        <e.fog
          attach='fog'
          ref={fogRef}
          theatreKey='Fog'
          args={[colors.foreground, 1, 400]}
        />
        <color
          theatreKey='Background'
          attach='background'
          args={[colors.background]}
        />
        <e.mesh
          theatreKey='FocusTarget'
          ref={focusTargetVisualizerRef}
          visible='editor'>
          <sphereGeometry args={[0.2, 1]} />
          <meshBasicMaterial color='blue' />
        </e.mesh>
        <EffectComposer>
          <Noise opacity={0.07} />
          <Vignette
            eskil={false}
            offset={0.1}
            darkness={0.5}
          />
        </EffectComposer>
      </KeyboardControls>
    </>
  );
};
