/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/avatar-winter.glb -o src/components/AvatarWinter.jsx -r public 
*/

import styled from '@emotion/styled';
import {
  useAnimations,
  useFBX,
  useGLTF,
  useKeyboardControls,
  useScroll,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { editable as e } from '@theatre/r3f';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Vector3 } from 'three';
import { SkeletonUtils } from 'three-stdlib';
import {
  AvatarActions,
  AvatarChatMessageType,
  useChatListener,
  useDanceListener,
  useMoveListener,
} from './../events/avatarEvents';
import useGameStore from './../stores/GameStore';

const ChatBubble = styled.div`
  p.hidden {
    opacity: 0;
  }
`;

const MOVEMENT_SPEED = {
  walk: 0.45,
  fly: 5,
  swim: 2,
  run: 2,
};

const LOCOMOTION = {
  walk: {
    speed: 0.45,
    animations: {
      idle: 'Idle',
      moving: 'SwaggerWalkInPlace',
    },
  },
  fly: {
    speed: 5,
    animations: {
      idle: 'Floating',
      moving: 'Flying',
    },
  },
  swim: {
    speed: 5,
    animations: {
      idle: 'Floating',
      moving: 'Swimming',
    },
  },
  run: {
    speed: 2,
    animations: {
      idle: 'Idle',
      moving: 'RunningInPlace',
    },
  },
};

const getAnimationWithName = (fbx, name) => {
  const animation = fbx.animations[0];
  animation.name = name;
  // console.log(animation);
  return animation;
};

export function Avatar({ ...props }) {
  const avatar = useRef();
  const group = useRef();
  const text = useRef();

  const { animations, scene } = useGLTF('/models/avatar-winter.glb');

  const { camera, editor } = useGameStore();

  const [smoothedCameraPosition] = useState(() => new Vector3());
  const [smoothedCameraTarget] = useState(() => new Vector3());

  const [locomotionType, setLocomotionType] = useState(AvatarActions.WALK);

  const [subscribeKeys, getKeys] = useKeyboardControls();

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const flying = useFBX('/animations/Flying.fbx');
  const floating = useFBX('/animations/Floating.fbx');
  const swimming = useFBX('/animations/Swimming.fbx');
  const combinedAnimations = [
    ...animations,
    getAnimationWithName(flying, 'Flying'),
    getAnimationWithName(floating, 'Floating'),
    getAnimationWithName(swimming, 'Swimming'),
  ];
  const { actions } = useAnimations(combinedAnimations, avatar);

  const [chatMessage, setChatMessage] = useState('');
  const [path, setPath] = useState();

  const position = useMemo(() => [20, 21.15, 5], []);
  const scale = useMemo(() => 1, []);
  const [animation, setAnimation] = useState('Idle');
  const [isDancing, setIsDancing] = useState(false);
  const [showChatBubble, setShowChatBubble] = useState(false);

  const scrollData = useScroll();

  useEffect(() => {
    clone.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [clone]);

  useEffect(() => {
    actions[animation].reset().fadeIn(0.32).play();
    return () => actions[animation]?.fadeOut(0.32);
  }, [animation]);

  function onPlayerDance(value) {
    // setIsDancing(true);
  }

  function onPlayerMove(value) {
    console.log(value);
    const path = [];
    value.path?.forEach(pos => {
      // TODO add grid to world position conversion to avoid walking through walls
      // OR add pathfinding, or both, or make clicking on obstacles impossible
      path.push(new Vector3(pos[0], pos[1], pos[2]));
    });
    setPath(path);
    setLocomotionType(value.action);
  }

  function onPlayerChatMessage(value) {
    if (value.type === AvatarChatMessageType.ENTER) {
      setShowChatBubble(true);
      setChatMessage(value.message);
    } else if (value.type === AvatarChatMessageType.EXIT) {
      setShowChatBubble(false);
    }
  }

  useMoveListener(e => onPlayerMove(e));
  useDanceListener(e => onPlayerDance(e));
  useChatListener(e => onPlayerChatMessage(e));

  useFrame((state, delta) => {
    const hips = avatar.current.getObjectByName('Hips');
    hips.position.set(0, hips.position.y, 0);
    // const pageScroll = scrollData.offset;

    // if (camera === 'SCROLL') {
    //   const cameraPosition = new Vector3();
    //   cameraPosition.copy(group.current.position);
    //   cameraPosition.z += 5 + pageScroll * 5;
    //   cameraPosition.y += 1.65 + pageScroll * 9;

    //   const cameraTarget = new Vector3();
    //   cameraTarget.copy(group.current.position);
    //   cameraTarget.y += 1.25;

    //   smoothedCameraPosition.lerp(cameraPosition, 0.1);
    //   smoothedCameraTarget.lerp(cameraTarget, 0.1);

    //   state.camera.position.copy(smoothedCameraPosition);
    //   state.camera.lookAt(smoothedCameraTarget);
    // }

    // if (path?.length && group.current.position.distanceTo(path[0]) > 0.1) {
    //   // console.log(path);
    //   const direction = group.current.position
    //     .clone()
    //     .sub(path[0])
    //     .normalize()
    //     .multiplyScalar(LOCOMOTION[locomotionType].speed * delta);
    //   group.current.position.sub(direction);
    //   group.current.lookAt(path[0]);
    //   setAnimation(LOCOMOTION[locomotionType].animations.moving);
    //   setIsDancing(false);
    // } else if (path?.length) {
    //   path.shift();
    // } else {
    //   if (isDancing) {
    //     setAnimation('Dancing');
    //   } else {
    //     setAnimation(LOCOMOTION[locomotionType].animations.idle);
    //   }
    // }
  });

  useEffect(() => {
    console.log(animations);
    subscribeKeys(
      state => state.dance,
      value => {
        if (value) setIsDancing(true);
      }
    );
  }, []);

  return (
    <e.group
      position={position}
      scale={scale}
      {...props}
      dispose={null}
      ref={group}
      theatreKey='Avatar'
    >
      {/* <Cameras /> */}
      <pointLight
        position={[0, 3, 1]}
        intensity={50}
        castShadow
      />
      <primitive
        ref={avatar}
        object={clone}
      />
    </e.group>
  );
}

useGLTF.preload('/models/avatar-winter.glb');
useGLTF.preload('/animations/Flying.fbx');
useGLTF.preload('/animations/Floating.fbx');
