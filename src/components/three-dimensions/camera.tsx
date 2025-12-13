"use client"

import { OrbitControls } from "@react-three/drei";

const Camera = () => {
    return (
        <>
            <perspectiveCamera
            />
            <OrbitControls
                minDistance={50}
                maxDistance={50}
                enableZoom={false}
                autoRotate={true}
            />
        </>
    );
}

export default Camera;