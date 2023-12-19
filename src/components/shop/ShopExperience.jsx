import { Html, useGLTF } from "@react-three/drei";
import { useState } from "react";
import { Fog } from "../Fog";


const sceneItems = [
    // {
    //     model: "avatar.glb",
    //     position: [0, 0, -1.2],
    //     scale: 1.8,
    //     name: "Tilman",
    //     price: 300,
    //     labelOffset: [0, 1, 1],
    // },
    {
        model: "cat-midpoly.glb",
        position: [6, 0, -3],
        rotation: [0, -Math.PI / 6, 0],
        name: "Cat",
        price: 450,
        labelOffset: [-0.5, 1, 1.5],
    },
    {
        model: "Cromlech.gltf",
        position: [3, 0, 0],
        scale: 0.8,
        name: "Stones",
        price: 25,
        labelOffset: [0, 1, 0],
    },
    {
        model: "Monster/glTF/Ghost.gltf",
        position: [-4.1, 0, -3],
        name: "Ghost",
        rotation: [0, Math.PI / 6, 0],
        price: 600,
        labelOffset: [-0.5, 3, 2],
    },
    {
        model: "Monster/glTF/Armabee.gltf",
        position: [-1, 0, 4],
        scale: [1, 1, 1],
        name: "Bee",
        price: 80,
        labelOffset: [1, 1, 0],
    },
    {
        model: "Dango.glb",
        position: [-7.8, .3, 3],
        scale: 0.72,
        rotation: [0, Math.PI / 6, 0],
        name: "Dango",
        price: 4,
        labelOffset: [-1, 0.5, 0],
    },
];

const ShopExperience = () => {
    return (
        <>
            <Fog position={[0, 0, -4]} />
            {sceneItems.map((item, index) => {
                return <Item key={index} {...item} />;
            })}
        </>
    )
}


const Item = ({
    model,
    position,
    rotation,
    name,
    price,
    labelOffset,
    ...props
}) => {
    const gltf = useGLTF(`models/${model}`);
    const [hidden, setHidden] = useState(false);

    return (
        <group position={position} rotation={rotation}>
            <primitive object={gltf.scene} {...props} />
            <Html
                transform
                occlude
                onOcclude={setHidden}
                position={labelOffset}
                scale={0.42}
            >
                <div className={`label noselect ${hidden ? "label--hidden" : ""}`}>
                    <div className="label__price">{price} &euro;</div>
                    <div className="label__name">{name}</div>
                </div>
            </Html>
        </group>
    );
};


export default ShopExperience;
