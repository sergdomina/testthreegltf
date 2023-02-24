import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, './scene.gltf');
  const modelRef = useRef();
  return (
    <group ref={modelRef}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Model;
