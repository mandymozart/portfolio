import {
  MeshReflectorMaterial,
  Scroll,
  Sky,
  useGLTF,
  useScroll,
} from '@react-three/drei';

import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { Suspense, useRef } from 'react';
import { Avatar } from '../Avatar';
import { FireFlies } from '../Models/Home/FireFlies';
import { Island } from '../Models/Home/Island';
import { MovingClouds } from '../Models/Home/MovingClouds';
import { MovingSpot } from '../Models/Lights/MovingSpot';
import { PointLight } from '../Models/Lights/PointLight';

export const HomeExperience = () => {
  const scrollData = useScroll();
  useFrame(state => {
    // state.camera.position.x = -2 + scrollData.offset * 4;
    console.log(scrollData.offset);
  });

  const skyControls = useControls('SKY', {
    position: [0, 10, 300],
    distance: 450000,
    inclination: 0,
    azimuth: { value: Math.PI / 4 },
    mieCoefficient: { value: 0.005 },
    mieDirectionalG: { value: 0.8 },
    rayleigh: { value: 0.04 },
    turbidity: { value: 10 },
    active: {
      value: true,
    },
  });

  return (
    <>
      <Suspense>
        {/* <OrbitControls
          // maxPolarAngle={Math.PI / 2}
          // minAzimuthAngle={-Math.PI / 2}
          // maxAzimuthAngle={Math.PI / 2}
          enableZoom={true}
        /> */}
        {/* <ContactShadows
        position-y={0}
        opacity={0.5}
        blur={2}
        color={"pink"}
        scale={40}
      /> */}
        {/* <ambientLight intensity={0.9} /> */}
        {/* <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
        />
        <directionalLight
          position={[-5, 5, 5]}
          intensity={0.5}
          color='lightblue'
        /> */}
        {/* <Environment preset='dawn' /> */}
        <PointLight />
        <MovingSpot />
        <gridHelper />

        {skyControls.active && <Sky {...skyControls} />}
        <FireFlies />
        <Scroll>
          {/* {foodItems.map((foodItem, idx) => (
            <FoodItem
              key={idx}
              {...foodItem}
            />
          ))} */}
        </Scroll>
        <Island position={[0, 0, 0]} />
        <mesh
          position={[0, -1, 0]}
          rotation-x={-Math.PI / 2}
        >
          <planeGeometry args={[1000, 1000]} />
          <MeshReflectorMaterial
            color='#ffffff'
            resolution={1024}
            mixStrength={3}
            roughness={0.6}
          />
        </mesh>
        <Avatar
          rotation-y={-Math.PI / 6}
          castShadow
        />
        <MovingClouds />
        <fog
          attach='fog'
          args={['#1c1c1c', 1, 90]}
        />
      </Suspense>
    </>
  );
};

const FoodItem = ({ model, page, scale }) => {
  const gltf = useGLTF(model);
  const viewport = useThree(state => state.viewport);
  const ref = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    const pageScroll = scrollData.offset;
    ref.current.rotation.y = pageScroll * Math.PI * 2;
    const pages = scrollData.pages - 1;
    const offsetX = 2;

    // ref.current.position.x =
    //   scrollData.range((page - 1) / pages, 1 / pages) * offsetX;

    ref.current.position.x =
      scrollData.curve((page - 1) / pages, 2 / pages) * offsetX;
  });

  return (
    <group ref={ref}>
      <primitive
        object={gltf.scene}
        scale={scale ? scale : 0.5}
        position={[0, -viewport.height * page, 0]}
      />
    </group>
  );
};
