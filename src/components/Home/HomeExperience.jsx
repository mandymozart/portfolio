import {
  Environment,
  Scroll,
  Sky,
  useGLTF,
  useScroll,
} from '@react-three/drei';

import { useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { foodItems } from '../../mockData/food';
import { AvatarWinter } from '../AvatarWinter';
import { Heaven } from '../Heaven';
import { FireFlies } from '../Models/Home/FireFlies';
import Map from '../Models/Home/Map';

export const HomeExperience = () => {
  const scrollData = useScroll();
  useFrame(state => {
    state.camera.position.x = -2 + scrollData.offset * 4;
  });

  return (
    <>
      <Suspense>
        {/* <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          enableZoom={true}
        /> */}
        {/* <ContactShadows
        position-y={0}
        opacity={0.5}
        blur={2}
        color={"pink"}
        scale={40}
      /> */}
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
        />
        <directionalLight
          position={[-5, 5, 5]}
          intensity={0.5}
          color='lightblue'
        />
        <Environment preset='dawn' />

        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <FireFlies />
        <Scroll>
          {foodItems.map((foodItem, idx) => (
            <FoodItem
              key={idx}
              {...foodItem}
            />
          ))}
        </Scroll>
        <Map position={[0, 0, 0]} />
        <AvatarWinter rotation-y={-Math.PI / 6} />
        <Heaven position={[0, 0, 0]} />
        <fog
          attach='fog'
          args={['#e2f1fd', 1, 90]}
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
