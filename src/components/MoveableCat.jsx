import { useCursor, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Controls } from "../App";


const MOVEMENT_SPEED = 0.05;

const MoveableSphere = ({ ...props }) => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef()
    const [selected, setSelected] = useState(false)
    let color = hovered ? "pink" : "white";
    if (selected) {
        color = "hotpink";
    }
    useCursor(hovered)

    const forwardPressed = useKeyboardControls((state) => state[Controls.forward])
    const backPressed = useKeyboardControls((state) => state[Controls.back])
    const leftPressed = useKeyboardControls((state) => state[Controls.left])
    const rightPressed = useKeyboardControls((state) => state[Controls.right])

    useFrame(() => {
        if (!selected) {
            return;
        }
        if (forwardPressed) {
            ref.current.position.y += MOVEMENT_SPEED;
        }
        if (backPressed) {
            ref.current.position.y -= MOVEMENT_SPEED;
        }
        if (leftPressed) {
            ref.current.position.x -= MOVEMENT_SPEED;
        }
        if (rightPressed) {
            ref.current.position.x += MOVEMENT_SPEED;
        }
    })

    return (
        <mesh
            ref={ref}
            castShadow
            {...props}
            onPointerEnter={(e) => {
                e.stopPropagation()
                setHovered(true)
            }}
            onPointerLeave={(e) => {
                e.stopPropagation()
                setHovered(false)
            }}
            onClick={(e) => {
                e.stopPropagation()
                setSelected(!selected)
                console.log(selected)
            }}
            onPointerMissed={() => setSelected(false)}
        >
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

export default MoveableSphere