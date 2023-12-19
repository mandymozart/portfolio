import {
  Environment,
  Scroll,
  useGLTF,
  useScroll
} from "@react-three/drei";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { foodItems } from "../../../mockData/food";
import { AvatarWinter } from "../../AvatarWinter";
import Cromlech from "../../Cromlech";
import { Fog } from "../../Fog";

export const Experience = () => {
  const scrollData = useScroll();
  useFrame((state) => {
    state.camera.position.x = -2 + scrollData.offset * 4;
  });

  return (
    <>
      {/* <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        enableZoom={false}
      /> */}
      {/* <ContactShadows
        position-y={0}
        opacity={0.5}
        blur={2}
        color={"pink"}
        scale={40}
      /> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} color="lightblue" />
      <Environment preset="studio" />
      <Scroll>
        {foodItems.map((foodItem, idx) => (
          <FoodItem key={idx} {...foodItem} />
        ))}
      </Scroll>
      <group position-y={-1}>
        <Cromlech position={[0, 0, 0]} />
        {/*   <Panda position={[2.5, 0, -5]} rotation-y={-Math.PI / 6} /> */}
        <AvatarWinter position={[2.5, 0, 0]} rotation-y={-Math.PI / 6} />
        <Fog position={[0, 0, -5]} />
      </group>

    </>
  );
};

const FoodItem = ({ model, page }) => {
  const gltf = useGLTF(model);
  const viewport = useThree((state) => state.viewport);
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
        position={[0, -viewport.height * page, 0]}
      />
    </group>
  );
};
