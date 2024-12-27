"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three"; // Import the Mesh type

type FloatingObjectProps = {
  position: [number, number, number];
  scale: number;
  rotationSpeed?: number;
};

const FloatingObject = ({ position, scale, rotationSpeed = 1 }: FloatingObjectProps) => {
  const mesh = useRef<Mesh>(null);

  useEffect(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.random() * Math.PI;
    mesh.current.rotation.y = Math.random() * Math.PI;
  }, []);

  return (
    <Float speed={2 * rotationSpeed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        <octahedronGeometry />
        <meshStandardMaterial color="#7C3AED" wireframe />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  const { gl } = useThree();

  useEffect(() => {
    const handleContextLost = (event: WebGLContextEvent) => {
      event.preventDefault();
      console.warn("WebGL context lost. Attempting to restore.");
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored.");
    };

    gl.domElement.addEventListener("webglcontextlost", handleContextLost);
    gl.domElement.addEventListener("webglcontextrestored", handleContextRestored);

    return () => {
      gl.domElement.removeEventListener("webglcontextlost", handleContextLost);
      gl.domElement.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, [gl]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingObject position={[-2, 2, -2]} scale={0.3} />
      <FloatingObject position={[2, -1, -3]} scale={0.2} rotationSpeed={0.8} />
      <FloatingObject position={[-1, -2, -2]} scale={0.4} rotationSpeed={1.2} />
      <FloatingObject position={[2, 1, -4]} scale={0.3} rotationSpeed={0.9} />
    </>
  );
};

const FallbackBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background" />
);

export const HeroBackground = () => {
  const [hasWebGLSupport, setHasWebGLSupport] = useState(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    setHasWebGLSupport(
      !!window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  }, []);

  if (!hasWebGLSupport) {
    return <FallbackBackground />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};
