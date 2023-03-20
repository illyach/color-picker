import React from 'react';
import './App.css'
import { PresentationControls, Stage } from '@react-three/drei';
import { Canvas} from '@react-three/fiber'
import {AccumulativeShadows, RandomizedLight, OrbitControls } from '@react-three/drei'
import Rtfkt from './Rtfkt'





export default function  MyModel(props){

const {colorLine} = props
const {color} = props

  return (

    <div>

    <Canvas   dpr={[1,2]} camera={{fov: 30}} position={[5, 0, 15]} style={{width:"600px" , height: "600px",borderRadius: '10%'}}
    >
    <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />

    <color attach="background" args={['#101010']} />

      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1,Math.PI / 2]}>
        
            <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
            <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
          </AccumulativeShadows>
              <Stage enviroment={null} shadows={{ type: 'accumulative', bias: -0.001 }} >
                    <Rtfkt scale={0.1} color={color} colorLine={colorLine}/>
              </Stage>

      </PresentationControls>

        <OrbitControls  autoRotate autoRotateSpeed={5.0} enableRotate={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

    </Canvas>
    
    </div>
  )
}


