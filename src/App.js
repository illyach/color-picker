import React, { useRef, useEffect, Suspense,useLayoutEffect, useState } from 'react';
import * as THREE from 'three';
import nostalgy from './nostalgy/scene.glb'
import './App.css'
import { PresentationControls, Stage } from '@react-three/drei';
import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF } from '@react-three/drei'
import MyModel from './MyModel';

function App() {


  return (
    <>
    <div className="text">
    <p>Welcome to my website</p>
    </div>

    
    <div className="model">
    <MyModel/>
    </div>

    </>


  );
}

export default App;
