"use client";

import { useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Banana = (props: any) => {
    const fbx = useFBX("/banana_3d.fbx");
    
    return (
        <primitive
            {...props}
            object={fbx}
        />
    );
}

export default Banana;