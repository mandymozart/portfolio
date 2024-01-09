import { PivotControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

const MoveableItem = ({ children, ...props }) => {
    const ref = useRef()
    const displayItemNewPosition = () => {
        const newPosition = new THREE.Vector3()
        ref.current.getWorldPosition(newPosition)

        const newRotation = new THREE.Euler()
        ref.current.getWorldQuaternion(newRotation)
        console.log(newPosition, newRotation)
    }
    return (
        <PivotControls depthTest={false} onDragEnd={displayItemNewPosition}>
            <group ref={ref} {...props}>
                {children}
            </group>
        </PivotControls>
    )

}

export default MoveableItem