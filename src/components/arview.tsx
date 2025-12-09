import { ViroAmbientLight, ViroScene, ViroText } from '@reactvision/react-viro';
import React from 'react';

function arview() {
  return (
    <ViroScene>
      <ViroAmbientLight color="#ffffff" />
      <ViroText 
        text="Hello World AR!" 
        position={[0, 0, -1]}
        scale={[0.5, 0.5, 0.5]}
        style={{ color: "#ffffff", fontFamily: "Arial", fontSize: 30 }}
      />
    </ViroScene>
  );
}

export default arview;



