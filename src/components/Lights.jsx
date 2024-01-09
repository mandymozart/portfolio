import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

const Lights = ({ props }) => {
    const ref = useRef();
    const helper = useHelper(ref, THREE.DirectionalLightHelper, "red");
    const { color, intensity, height } = useControls("Light", {
        color: "#876ae5",
        intensity: 2.2,
        height: 1,
    });
    return (
        <>
            <directionalLight
                {...props}
                ref={ref}
                color={color}
                intensity={intensity}
                position={[0, height, 0]}
            />
        </>
    );
};

export default Lights