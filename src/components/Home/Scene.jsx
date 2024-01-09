import {
  KeyboardControls,
  MeshReflectorMaterial,
  useCursor,
  useScroll,
} from '@react-three/drei';

import {
  PerspectiveCamera,
  editable as e,
  useCurrentSheet,
} from '@theatre/r3f';

import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef, useState } from 'react';
import { Avatar } from '../Avatar';
import { FireFlies } from '../Models/Home/FireFlies';
import { Island } from '../Models/Home/Island';
import { MountainAndRiver } from '../Models/Home/MountainAndRiver';
import { MovingClouds } from '../Models/Home/MovingClouds';
import { PointLight } from '../Models/Lights/PointLight';
import useMenuStore from './../../stores/MenuStore';

export const Scene = () => {
  const { colors, setColors } = useMenuStore();

  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const cameraRef = useRef();
  const cameraTargetRef = useRef();
  const focusTargetRef = useRef();

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
    // const sequenceLength = val(sheet.sequence.pointer.length);
    // // update the "position" of the playhead in the sequence, as a fraction of its whole length
    // sheet.sequence.position = scroll.offset * sequenceLength;
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
        <PerspectiveCamera
          makeDefault
          ref={cameraRef}
          theatreKey='Camera'
          fov={42}
          near={0.1}
          far={200}
          position={[20, 25.35, 18]}
          lookAt={cameraTargetRef}
        />
        <e.mesh
          theatreKey='Camera Target'
          visible='editor'
          ref={cameraTargetRef}
        >
          <sphereGeometry args={[0.1, 0]} />
          <meshPhongMaterial color='yellow' />
        </e.mesh>
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
          args={[colors.background, 1, 20]}
        />
        <color
          attach='background'
          args={[colors.background]}
        />
      </KeyboardControls>
    </>
  );
};
