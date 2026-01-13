import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Target(props) {
  const targetRef = useRef();
  
  // Sử dụng model local thay vì Supabase
  const { scene } = useGLTF('/models/target-stand.glb');

  useFrame((state, delta) => {
    if (targetRef.current) {
      targetRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={targetRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
}

// Preload model
useGLTF.preload('/models/target-stand.glb');