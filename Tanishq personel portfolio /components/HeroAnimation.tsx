"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, OrbitControls } from "@react-three/drei"

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshStandardMaterial color="#4285F4" />
    </Box>
  )
}

export default function HeroAnimation() {
  return (
    <div className="h-64 w-64">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <RotatingCube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

