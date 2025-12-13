"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Banana from "./banana";
import Camera from "./camera";

const ModelDisplay: React.FC = () => {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Banana position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} />
            <Preload all />
            <Camera />
        </Canvas>
    );
}

export default ModelDisplay;