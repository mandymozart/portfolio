import {
  ContactShadows,
  KeyboardControls,
  MeshReflectorMaterial,
  PerspectiveCamera,
  Scroll,
  useCursor,
  useScroll,
} from '@react-three/drei';

import { useCurrentSheet } from '@theatre/r3f';

import useGameStore, { cameras } from '@/stores/GameStore';
import useMenuStore from '@/stores/MenuStore';
import { useFrame } from '@react-three/fiber';
import { val } from '@theatre/core';
import { useControls } from 'leva';
import { useRef, useState } from 'react';
import { Avatar } from '../Avatar';
import { FireFlies } from '../Models/Home/FireFlies';
import { Island } from '../Models/Home/Island';
import { MountainAndRiver } from '../Models/Home/MountainAndRiver';
import { MovingClouds } from '../Models/Home/MovingClouds';
import { PointLight } from '../Models/Lights/PointLight';

export const Scene = () => {
  const { colors, setColors } = useMenuStore();
  const { editor, setEditor, camera, setCamera } = useGameStore();

  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const planeMaterial = useRef();

  const [onFloor, setOnFloor] = useState(false);
  useCursor(onFloor);

  const envControls = useControls('ENVIRONMENT', {
    foreground: {
      value: colors.foreground,
      onChange: color => {
        // planeMaterial.current.color = color;
        setColors({ ...colors, foreground: color });
      },
    },
    background: {
      value: colors.background,
      onChange: color => {
        setColors({ ...colors, background: color });
      },
    },
    editor: {
      value: editor,
      onChange: value => {
        setEditor(value);
      },
    },
    camera: {
      value: camera,
      options: cameras,
      onChange: value => {
        setCamera(value);
      },
    },
  });

  const onPlaneClicked = e => {
    // console.log(e);
    // emitMove({
    //   path: [[e.point?.x, 1.15, e.point?.z]],
    //   action: AvatarActions.SWIM,
    // });
  };

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
          { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
          { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
          { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
          { name: 'dance', keys: ['Space'] },
        ]}
      >
        <Scroll>
          <PerspectiveCamera
            makeDefault
            theatreKey='Camera'
            fov={42}
            near={0.1}
            far={200}
            position={[20, 25.35, 18]}
          />
          <ContactShadows
            position-y={0}
            opacity={0.5}
            blur={2}
            color={'pink'}
            scale={40}
          />
          <mesh
            position={[20, 21.15, 8]}
            theatreKey='Target'
            visible='editor'
          >
            <sphereGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color={'red'} />
          </mesh>
          <PointLight />
          {/* <MovingSpot theatreKey='MovingSpot' /> */}
          <FireFlies theatreKey='FireFlies' />
          <mesh
            position={[0, 1.15, 0]}
            rotation-x={-Math.PI / 2}
            receiveShadow
            onDoubleClick={onPlaneClicked}
            onPointerEnter={() => setOnFloor(true)}
            onPointerLeave={() => setOnFloor(false)}
          >
            <planeGeometry args={[1000, 1000]} />
            <MeshReflectorMaterial
              ref={planeMaterial}
              color={colors.foreground}
              resolution={1024}
              mixStrength={10}
              roughness={0.5}
            />
          </mesh>
          <MountainAndRiver />
          <Avatar />
          <MovingClouds />
          <Island position={[0, 0, 0]} />

          <fog
            attach='fog'
            args={[colors.background, 1, 200]}
          />
          <color
            attach='background'
            args={[colors.background]}
          />
        </Scroll>
      </KeyboardControls>
    </>
  );
};
