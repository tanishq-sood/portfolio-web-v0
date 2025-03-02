"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"

function Model() {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial color="#4285F4" />
    </Sphere>
  )
}

export default function Avatar() {
  return (
    <div className="h-64 w-64">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

