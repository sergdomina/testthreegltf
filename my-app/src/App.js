import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
  );
};

export default App;

