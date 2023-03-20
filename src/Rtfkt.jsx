import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';


const Rtfkt = (props)  => {
  const {colorLine} = props
  const {color} = props
  const { nodes, materials } = useGLTF('./models/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.bladeblinn31SG}>
        <meshStandardMaterial
           color={colorLine}
 
        />
        </mesh>
        <mesh geometry={nodes.Object_3.geometry} material={materials.blinn6SG}>
        <meshStandardMaterial
            color={color}
 
        />
        </mesh>
        <mesh geometry={nodes.Object_4.geometry} material={materials.blinn7SG}>
        <meshStandardMaterial
         color="white"
 
        />
        </mesh>
        <mesh geometry={nodes.Object_5.geometry} material={materials.blinn1SG}/>
       
        <mesh geometry={nodes.Object_6.geometry} material={materials.blinn1SG}>
        <meshStandardMaterial
          color={color}
 
        />
        </mesh>
        <mesh geometry={nodes.Object_7.geometry} material={materials.blinn2SG}>
        <meshStandardMaterial
           color={color}
 
        />
        </mesh>

        <mesh geometry={nodes.Object_8.geometry} material={materials.blinn2SG}>
        <meshStandardMaterial
           color={color}
 
        />
        </mesh>

        <mesh geometry={nodes.Object_9.geometry} material={materials.blinn2SG} >
        <meshStandardMaterial
            color={color}
 
        />
        </mesh>
        <mesh geometry={nodes.Object_10.geometry} material={materials.blinn3SG} >
        <meshStandardMaterial
            color={color}
 
        />
        </mesh>
        <mesh geometry={nodes.Object_11.geometry} material={materials.blinn4SG}>
        <meshStandardMaterial
            color={color}
 
        />
        </mesh>
        <mesh geometry={nodes.Object_12.geometry} material={materials.blinn5SG} >
        <meshStandardMaterial
            color={color}
 
        />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/scene.gltf')
export default Rtfkt;