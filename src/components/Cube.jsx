import { useFrame, useThree } from "@react-three/fiber";
import { button, useControls } from "leva";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";

const Cube = memo((props) => {
    const [color, setColor] = useState("white");

    const material = useMemo(() => <meshStandardMaterial color={color} />, [color]);

    const rotate = () => ref.current.rotation.x += Math.PI / 4

    const camera = useThree((state) => state.camera);

    const updateFov = (fov) => {
        camera.fov = fov;
        camera.updateProjectionMatrix()

    }

    // dont use useState to change positions, use the reference because otherwise this gets called 60 times a sec.
    useFrame((_, delta) => {
        ref.current.rotation.y += speed * delta;
    })

    const { speed } = useControls("SPEED", {
        speed: {
            value: 0,
            min: -12,
            max: 12
        }
    })

    useControls(`FOV`, {
        small: button(() => updateFov(20)),
        normal: button(() => updateFov(42)),
        big: button(() => updateFov(60)),
        huge: button(() => updateFov(110)),
    })

    useEffect(() => {
        const colorsPosition = {
            white: [0, 0, 0],
            red: [-1, 0, 0],
            green: [1, 0, 0],
            blue: [0, 1, 0]
        }
        const position = colorsPosition[color];
        ref.current.position.set(...position);
    }, [color])

    const ref = useRef();
    console.log(`Cube rendered`)

    useControls({
        changeColorToRed: button(() => setColor("red")),
        changeColorToBlue: button(() => setColor("blue")),
        changeColorToGreen: button(() => setColor("green")),
    });
    return (
        <mesh {...props} ref={ref}>
            <boxGeometry />
            {material}
        </mesh>
    );
});

export default Cube;