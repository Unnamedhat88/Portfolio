import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {useTexture} from "@react-three/drei";
import { DirectionalLight,DirectionalLightHelper } from "three";
import { useHelper, Stats } from "@react-three/drei";
import Vertexorb from "../Shaders/Orb.vert";
import Fragmentorb from "../Shaders/Orb.frag"
import Object from "./Object";
import { useControls } from "leva";
import * as THREE from "three";
import VolumetricLights from "./VolumetricLights";




export default function Scene({positionofxz}) {
  
  const orbRefs= useRef([])
  
  const orbPosition = useRef(Array.from({length:200},()=>[
    Math.random() * 200 -170,
    Math.random() * 33 +1,
    Math.random() * 200 -170,
    Math.random()*0.6+0.2,
    Math.random()*2,
  ]

  ))

  
  const texture = useTexture("https://unnamedhat88.github.io/Portfolio/images/R.png");

  const orbuniforms = useRef({
            uFogColor: { value: new THREE.Color(0xe187c0) },
            uFogDensity: { value: 0.008 },         
            uCamPos:{ value: new THREE.Vector3(positionofxz-4,3.5,positionofxz-4) }             
  })
  

    const plane=useRef();
    const uniforms = useRef({
      uTexture:{value:texture},
      uTime:{value:0},
      uScrollPos: { value: 0 },
    });
    

  useFrame((state, delta, xrFrame)=>{
    if(plane.current){
      plane.current.material.uniforms.uTime.value+=delta*0.5;
      plane.current.material.uniforms.uScrollPos.value = positionofxz;}
    
    orbuniforms.current.uCamPos.value.set(positionofxz-4,3.5,positionofxz-4)

    orbRefs.current.forEach((mesh,i)=>{
      if (!mesh) return;
      const t =state.clock.getElapsedTime();
      const [x,y,z,a,b]=orbPosition.current[i];
      
      mesh.scale.setScalar(Math.abs(Math.sin(t*a+b)))
      mesh.lookAt(new THREE.Vector3(positionofxz,3.5,positionofxz))
        
      
    })
    
  

    
  })

  

  
  
  return (<>

    {/* <Light></Light> */}
    <ambientLight intensity={1.0}></ambientLight>

    {/* <mesh ref={plane} rotation={[-1.3,0,0]} position={[0,1,0]} castShadow receiveShadow>
      <planeGeometry args={[4,4,30,30]}/>
      <shaderMaterial fragmentShader={Fragmentwater} vertexShader={Vertexwater} uniforms={uniforms.current} transparent />
    </mesh> */}

    {orbPosition.current.map((pos,i)=>{
      
      return(
      <mesh key={i} ref={(el)=>(orbRefs.current[i]=el)} position={[pos[0],pos[1],pos[2]]} >
      <planeGeometry args={[1.5,1.5]}/>
      <shaderMaterial blending={THREE.AdditiveBlending} depthTest={true} depthWrite={false} vertexShader={Vertexorb} fragmentShader={Fragmentorb} transparent uniforms={orbuniforms.current}/>
      
    </mesh>)})
  }

  

    

    <Object positionofxz={positionofxz}></Object>
    <Stats></Stats>
    <VolumetricLights positionofxz={positionofxz}></VolumetricLights>


    </>
  )
  }