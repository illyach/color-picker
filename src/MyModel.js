import React, { useRef, useEffect, Suspense,useLayoutEffect, useState } from 'react';
import * as THREE from 'three';
import nostalgy from './nostalgy/scene.glb'
import './App.css'
import { PresentationControls, Stage } from '@react-three/drei';
import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF } from '@react-three/drei'
import './App.css'


function Model(props){

    const {scene} = useGLTF(nostalgy)

    
    
    return <primitive  object={scene} {...props} />
  
  }


export default function  MyModel(){
  return (
    <div style={{width:"400px" , height: "400px",borderRadius: '50%'}}>
    <Canvas shadowMap={null} dpr={[1,2]} camera={{fov: 30}} position={[5, 0, 15]} style={{width:"400px" , height: "400px",borderRadius: '50%'}}
    >
            <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />

  <ambientLight intensity={0.9} />
  <color attach="background" args={['#101010']} />
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1,Math.PI / 2]}>
        <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
        <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
      </AccumulativeShadows>
          <Stage enviroment={null} shadows={{ type: 'accumulative', bias: -0.001 }} >
                <Model scale={0.1} />
          </Stage>
        </PresentationControls>
    </Canvas>
    </div>
  )
}


