"use client"

import { Canvas } from '@react-three/fiber'
import { Float, Text3D, PerspectiveCamera } from '@react-three/drei'

export const SkillIcon = ({ text }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text3D
            font="/fonts/Inter_Bold.json"
            size={0.2}
            height={0.1}
            position={[-0.5, 0, 0]}
          >
            {text}
            <meshStandardMaterial color="#7C3AED" />
          </Text3D>
        </Float>
      </Canvas>
    </div>
  )
}

