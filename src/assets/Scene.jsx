import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {useTexture} from "@react-three/drei";
import { DirectionalLight,DirectionalLightHelper } from "three";
import { useHelper, Stats } from "@react-three/drei";
import Vertexwater from "../Shaders/water.vert";
import Fragmentwater from "../Shaders/water.frag"
import Object from "./Object";



export default function Scene() {
  

  const Light = () => {
    const dirLight = useRef(null);
    useHelper(dirLight, DirectionalLightHelper, 1, "red");
    return (
        <directionalLight color={"white"} intensity={2} ref={dirLight} scale={2} position={[0,2,0]} castShadow/>
    );
  };


  
  const texture=useTexture(`${import.meta.env.BASE_URL}images/R.png`);


    const plane=useRef();
    const uniforms = useRef({
      uTexture:{value:texture},
      uTime:{value:0},
    });
    

  

  useFrame((state, delta, xrFrame)=>{
    if(plane.current){
      plane.current.material.uniforms.uTime.value+=delta*0.5;}
  })

  
  
  return (<>

    {/* <Light></Light> */}
    <ambientLight intensity={1.0}></ambientLight>

    {/* <mesh ref={plane} rotation={[-1.3,0,0]} position={[0,1,0]} castShadow receiveShadow>
      <planeGeometry args={[4,4,30,30]}/>
      <shaderMaterial fragmentShader={Fragmentwater} vertexShader={Vertexwater} uniforms={uniforms.current} transparent />
    </mesh> */}

    

    <Object></Object>

    </>
  )
  }