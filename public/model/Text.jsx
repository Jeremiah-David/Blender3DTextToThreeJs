import React, { useRef } from "react";
// import { Canvas } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("../model/text.glb");
  useGLTF.preload("../model/text.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Text.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}
