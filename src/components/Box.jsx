import { useTexture, useVideoTexture } from "@react-three/drei";
import { useRef } from "react";

export const Box = () => {
    const ref = useRef();
    // const props = useTexture({
    //     map: "textures/PavingStones130_1K_Color.jpg",
    //     normalMap: "textures/PavingStones130_1K_NormalGL.jpg",
    //     roughnessMap: "textures/PavingStones130_1K_Roughness.jpg",
    //     aoMap: "textures/PavingStones130_1K_AmbientOcclusion.jpg"
    // })

    const texture = useTexture("textures/matcapTexture.png")
    const videoTexture = useVideoTexture("textures/spongebob-squarepants.mp4")

    return (
        <mesh ref={ref}>
            <boxGeometry />
            <meshBasicMaterial map={videoTexture} />
        </mesh>
    );
};