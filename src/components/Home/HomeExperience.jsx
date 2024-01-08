import {
  ContactShadows,
  KeyboardControls,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  useCursor,
  useScroll,
} from '@react-three/drei';

import { AvatarActions, emitMove } from '@/events/avatarEvents';
import { useToggle } from '@/hooks/useTogle';
import useGameStore, { cameras } from '@/stores/GameStore';
import useMenuStore from '@/stores/MenuStore';
import { useControls } from 'leva';
import { Suspense, useRef, useState } from 'react';
import { Avatar } from '../Avatar';
import { FireFlies } from '../Models/Home/FireFlies';
import { Island } from '../Models/Home/Island';
import { MountainAndRiver } from '../Models/Home/MountainAndRiver';
import { MovingClouds } from '../Models/Home/MovingClouds';
import { MovingSpot } from '../Models/Lights/MovingSpot';
import { PointLight } from '../Models/Lights/PointLight';

export const HomeExperience = () => {
  const { colors, setColors } = useMenuStore();
  const { editor, setEditor, camera, setCamera } = useGameStore();
  const scrollData = useScroll();
  const planeMaterial = useRef();

  const ToggledOrbitControls = useToggle(OrbitControls, 'editor');

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
    emitMove({
      path: [[e.point?.x, 1.15, e.point?.z]],
      action: AvatarActions.SWIM,
    });
  };

  return (
    <>
      <Suspense>
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
            makeDefault={editor}
            fov={75}
            position={[0, 20, 20]}
          />
          <ToggledOrbitControls />
          <Scroll>
            <ContactShadows
              position-y={0}
              opacity={0.5}
              blur={2}
              color={'pink'}
              scale={40}
            />

            <PointLight />
            <MovingSpot />
            <FireFlies />
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
      </Suspense>
    </>
  );
};
