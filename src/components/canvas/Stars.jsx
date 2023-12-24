import * as random from "maath/random/dist/maath-random.esm";

import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 100;
    ref.current.rotation.y -= delta / 150;
  });

  return (
    <group
      {...{
        rotation: [0, 0, Math.PI / 4],
      }}
    >
      <Points
        {...{
          ref,
          positions: sphere,
          stride: 3,
          frustumCulled: false,
          ...props,
        }}
      >
        <PointMaterial
          {...{
            transparent: true,
            color: "#f272c8",
            size: 0.001,
            sizeAttenuation: true,
            depthWrite: false,
          }}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div
      {...{
        className: "w-full h-auto absolute inset-0 z-[-1] opacity-[0.5]",
      }}
    >
      <Canvas
        {...{
          camera: { position: [0, 0, 1] },
        }}
      >
        <Suspense {...{ fallback: null }}>
          <Stars />
        </Suspense>

        <Preload {...{ all: true }} />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
