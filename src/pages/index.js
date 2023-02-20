import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import OrbitControls from "../components/OrbitControls";
import Light from "../components/Light";
import Floor from "../components/Floor";
import Draggable from "../components/Draggable";
import Model from "../../public/model/Text";
import { Suspense, useEffect } from "react";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [15, 15, 10],
        }}
      >
        <ambientLight color={"red"} intensity={0.2} />
        <Light position={[0, 3, 0]} />
        <Draggable>
          <Suspense fallback={null}>
            {/* <Box rotateX={3} rotateY={0.2} /> */}
          </Suspense>
        </Draggable>
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
        </Suspense>
        <OrbitControls />
        {/* <Floor position={[0, -1, 0]} /> */}
      </Canvas>
    </div>
  );
}
