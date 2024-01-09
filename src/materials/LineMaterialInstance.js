import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { useLayoutEffect, useRef } from "react";

export function LineMaterialInstance({ ...props }) {
  const paperTexture = useLoader(TextureLoader, '/textures/Craft_Light.jpg');
  const ref = useRef();
  useLayoutEffect(() => {
    // console.log(ref.current);
    ref.current.uniforms.paperTexture = paperTexture;
  });

  const materialControls = useControls('MATERIAL', {
    color: '#808080',
    roughness: { value: 0.4, min: 0, max: 1, step: 0.01 },
    metalness: { value: 0.1, min: 0, max: 1, step: 0.01 },
  });

  return (
    <lineMaterial
      ref={ref}
      // {...materialControls}
      uniforms={{ paperTexture: { value: paperTexture } }}
      side={1}
    />
  );
}
