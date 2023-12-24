import { Decal, Float, Preload, useTexture } from "@react-three/drei";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const Ball = (props = {}) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float
      {...{
        speed: 1.75,
        rotationIntensity: 1,
        floatIntensity: 2,
      }}
    >
      <ambientLight
        {...{
          intensity: 0.25,
        }}
      />
      <directionalLight
        {...{
          position: [0, 0, 0.05],
        }}
      />
      <mesh
        {...{
          castShadow: true,
          receiveShadow: true,
          scale: 2.75,
        }}
      >
        <icosahedronGeometry
          {...{
            args: [1, 1],
          }}
        />
        <meshStandardMaterial
          {...{
            color: "#fff8eb",
            polygonOffset: true,
            polygonOffsetFactor: -5,
            flatShading: true,
          }}
        />
        <Decal
          {...{
            position: [0, 0, 1],
            rotation: [2 * Math.PI, 0, 6.25],
            scale: 1,
            map: decal,
            flatShading: true,
          }}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      {...{
        frameloop: "demand",
        dpr: [1, 2],
        gl: { preserveDrawingBuffer: true },
      }}
    >
      <Suspense
        {...{
          fallback: <CanvasLoader />,
        }}
      >
        <Ball
          {...{
            imgUrl: icon,
          }}
        />
      </Suspense>

      <Preload
        {...{
          all: true,
        }}
      />
    </Canvas>
  );
};

export default BallCanvas;
