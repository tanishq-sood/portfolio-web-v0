"use client"

import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Model() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.075)
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.075)
  })

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="#4285F4" roughness={0.1} metalness={0.8} envMapIntensity={2} />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-[400px] max-w-md mx-auto">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Float
          speed={4} // Animation speed
          rotationIntensity={1} // XYZ rotation intensity
          floatIntensity={2} // Up/down float intensity
        >
          <Model />
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

