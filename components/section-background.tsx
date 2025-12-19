"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import * as THREE from "three";

type ParticleProps = {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
  type?: 'sphere' | 'torus' | 'octahedron' | 'box';
};

const AnimatedParticle = ({ position, scale, color, speed = 1, type = 'sphere' }: ParticleProps) => {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.x += 0.008 * speed;
    mesh.current.rotation.y += 0.012 * speed;

    const time = state.clock.elapsedTime;
    mesh.current.position.y = position[1] + Math.sin(time * speed + position[0]) * 0.15;
    mesh.current.position.x = position[0] + Math.cos(time * speed * 0.3 + position[1]) * 0.08;

    const targetScale = hovered ? scale * 1.3 : scale;
    mesh.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.08);
  });

  const geometry = useMemo(() => {
    switch (type) {
      case 'torus':
        return <torusGeometry args={[1, 0.3, 12, 20]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'box':
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      default:
        return <sphereGeometry args={[1, 20, 20]} />;
    }
  }, [type]);

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.2} floatIntensity={0.15}>
      <mesh
        ref={mesh}
        position={position}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {geometry}
        <meshStandardMaterial
          color={color}
          metalness={0.1}
          roughness={0.8}
          emissive={color}
          emissiveIntensity={hovered ? 0.15 : 0.05}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = ({ count = 20 }: { count?: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
      ] as [number, number, number],
      scale: Math.random() * 0.015 + 0.008,
      speed: Math.random() * 0.3 + 0.1,
    }));
  }, [count]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.01;

    groupRef.current.children.forEach((child, i) => {
      const particle = particles[i];
      if (particle) {
        child.position.z = particle.position[2] + Math.sin(time * particle.speed + i * 0.5) * 1.5;
        child.position.x = particle.position[0] + Math.cos(time * particle.speed * 0.7 + i) * 0.3;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle) => (
        <mesh key={particle.id} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial
            color="#8B5CF6"
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
};

type SceneProps = {
  variant?: 'experience' | 'projects' | 'hackathons';
};

const Scene = ({ variant = 'experience' }: SceneProps) => {
  const { gl } = useThree();

  useEffect(() => {
    const handleContextLost = (event: Event) => {
      const webglContextEvent = event as WebGLContextEvent;
      webglContextEvent.preventDefault();
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored.");
    };

    const canvas = gl.domElement as HTMLCanvasElement;
    canvas.addEventListener("webglcontextlost", handleContextLost as EventListener);
    canvas.addEventListener("webglcontextrestored", handleContextRestored as EventListener);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost as EventListener);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored as EventListener);
    };
  }, [gl]);

  const particleConfigs = useMemo(() => {
    const configs = {
      experience: [
        { position: [-4, 2, -3] as [number, number, number], scale: 0.2, color: "#8B5CF6", speed: 0.7, type: 'sphere' as const },
        { position: [4, -1, -4] as [number, number, number], scale: 0.18, color: "#06B6D4", speed: 1.0, type: 'octahedron' as const },
        { position: [-2, -2.5, -2] as [number, number, number], scale: 0.22, color: "#10B981", speed: 0.6, type: 'sphere' as const },
        { position: [3, 1.5, -5] as [number, number, number], scale: 0.16, color: "#F59E0B", speed: 0.9, type: 'box' as const },
      ],
      projects: [
        { position: [-3.5, 1.5, -3] as [number, number, number], scale: 0.22, color: "#06B6D4", speed: 0.8, type: 'octahedron' as const },
        { position: [3.5, -1.5, -4] as [number, number, number], scale: 0.2, color: "#8B5CF6", speed: 0.9, type: 'sphere' as const },
        { position: [-2.5, -1.5, -2] as [number, number, number], scale: 0.18, color: "#EF4444", speed: 0.7, type: 'box' as const },
        { position: [2, 2, -5] as [number, number, number], scale: 0.24, color: "#10B981", speed: 0.6, type: 'torus' as const },
      ],
      hackathons: [
        { position: [-4, 1, -3] as [number, number, number], scale: 0.24, color: "#F59E0B", speed: 0.75, type: 'octahedron' as const },
        { position: [4, -2, -4] as [number, number, number], scale: 0.18, color: "#8B5CF6", speed: 0.85, type: 'sphere' as const },
        { position: [-2, -2, -2] as [number, number, number], scale: 0.2, color: "#06B6D4", speed: 0.65, type: 'torus' as const },
        { position: [2.5, 2.5, -5] as [number, number, number], scale: 0.22, color: "#EF4444", speed: 1.0, type: 'box' as const },
      ],
    };
    return configs[variant];
  }, [variant]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />

      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#8B5CF6" />
      <pointLight position={[-5, -5, -3]} intensity={0.2} color="#06B6D4" />

      <ParticleField count={15} />

      {particleConfigs.map((config, index) => (
        <AnimatedParticle key={index} {...config} />
      ))}
    </>
  );
};

const MouseGradientTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none transition-opacity duration-700 dark:opacity-100 opacity-20"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%,
          rgba(139, 92, 246, 0.12) 0%,
          rgba(6, 182, 212, 0.06) 25%,
          rgba(16, 185, 129, 0.04) 50%,
          transparent 70%)`,
      }}
    />
  );
};

const ModernFallbackBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 dark:from-purple-500/10 dark:to-cyan-500/10" />

      <div
        className="absolute inset-0 transition-opacity duration-700 dark:opacity-100 opacity-30"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(139, 92, 246, 0.1) 0%,
            rgba(6, 182, 212, 0.05) 30%,
            transparent 60%)`,
        }}
      />

      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <div
              className="w-1 h-1 bg-purple-400/40 dark:bg-purple-400/60 rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20 dark:opacity-40"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <div
              className={`
                ${i % 3 === 0 ? 'w-3 h-3' : i % 3 === 1 ? 'w-2 h-2 rounded-full' : 'w-4 h-1 rounded-full'}
                ${i % 4 === 0 ? 'bg-purple-300' : i % 4 === 1 ? 'bg-cyan-300' : i % 4 === 2 ? 'bg-emerald-300' : 'bg-amber-300'}
                ${i % 3 === 0 ? 'rotate-45' : ''}
              `}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 0.6; }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

type SectionBackgroundProps = {
  variant?: 'experience' | 'projects' | 'hackathons';
};

export const SectionBackground = ({ variant = 'experience' }: SectionBackgroundProps) => {
  const [hasWebGLSupport, setHasWebGLSupport] = useState<boolean>(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    setHasWebGLSupport(!!context);
  }, []);

  if (!hasWebGLSupport) {
    return <ModernFallbackBackground />;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <MouseGradientTracker />

      <div className="absolute inset-0 opacity-60 dark:opacity-90">
        <Canvas dpr={[1, 1.5]} performance={{ min: 0.5 }}>
          <Scene variant={variant} />
        </Canvas>
      </div>
    </div>
  );
};
