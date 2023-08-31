import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

// const Phone = ({ isMobile }) => {
//   const phone = useGLTF("./phone3d/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={phone.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

const Phone = () => {
  const phone = useGLTF("./phone3d/scene.gltf");

  return (
    <mesh>
      <ambientLight
      intensity={10}
      groundColor='black'
      />

{/* Light to the backside of the 3d Model */}
      <directionalLight
      position={[0, 0, -1]}
      intensity={0.2}
      />

        <directionalLight
      position={[1.5, 0, -3]}
      intensity={0.13}
      /> 

<directionalLight
      position={[-1.5, 0, -3]}
      intensity={0.13}
      /> 

{/* Light to the frontside of the 3d Model  */}
         <directionalLight
      position={[0, 0, 1]}
      intensity={0.2}
      />



      {/* <hemisphereLight
      
       intensity={5}
       position={[0, -2, 30]}
       groundColor='black'
       
       /> */}
      <spotLight
        position={[1, 1, 1]}
        angle={0.3}
        penumbra={0}
        intensity={20}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <pointLight
       intensity={10} 
       position={[0,4,4]} 
      /> */}
    <primitive object={phone.scene} scale={0.25} 
    position-y={-0.5} position-x={-0.12} position-z={0} rotation-y={0} rotation-x={0} rotation-z={0} />

    </mesh>
  );
};

const PhoneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

     // Set the initial value of the `isMobile` state variable
     setIsMobile(mediaQuery.matches);
  
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
     return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 1, 1], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Phone isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
  
export default PhoneCanvas;


