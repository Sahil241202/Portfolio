import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const RotatingCube = () => {
  const meshRef = useRef(); // Correctly type the ref

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} /> {/* Changed from cylinderGeometry to boxGeometry */}
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <ambientLight intensity={0.5} /> {/* Added ambient light */}
      <directionalLight position={[1, 1, 1]} intensity={1} color={0x9CDBA6} /> {/* Fixed light name */}
      <color attach="background" args={["#F0F0F0"]} />
      <RotatingCube />
    </Canvas>
  );
};

export default App;
