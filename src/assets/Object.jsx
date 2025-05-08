import { useFrame,useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from "three";
import Vertexobject from "../Shaders/Object.vert";
import Fragmentobject from "../Shaders/Object.frag"
import { shaderMaterial } from "@react-three/drei";
import { uniform } from "three/src/nodes/TSL.js";
export default function Object(){
    const arrayCreated = useRef(false);
    const gltf = useLoader(GLTFLoader, 'images/models/environment.glb')
    const { uCausticSpeed,uCausticOffset,uCausticThickness } = useControls({ 
        Speed: {value:1.0,min:-10,max:10,step:1, onChange: (v)=>shaderMaterial.uniforms.uCausticSpeed.value=v},
        Offset: {value:0.66,min:-1,max:1,step:0.01, onChange: (v)=>shaderMaterial.uniforms.uCausticOffset.value=v},
        Thickness: {value:0.5,min:-2,max:2,step:0.1, onChange: (v)=>shaderMaterial.uniforms.uCausticThickness.value=v},
        Intensity: {value:0.28,min:-10,max:10,step:0.01, onChange: (v)=>shaderMaterial.uniforms.uCausticIntensity.value=v},
        Scale: {value:3.86,min:-10,max:10,step:0.01, onChange: (v)=>shaderMaterial.uniforms.uCausticScale.value=v}
})

    const obj=useRef();
        const uniforms = useRef({
          uTime:{value:0},
          uCausticSpeed:{value:1.0},
          uCausticColor:{value: new THREE.Color("#ffffff")},
          uCausticScale:{value:10.0},
          uCausticOffset:{value:0.66},
          uCausticThickness:{value:0.5},
          uCausticIntensity:{value: 0.28}

        });
      
    const shaderMaterial= new THREE.ShaderMaterial({
      vertexShader: Vertexobject,
      fragmentShader: Fragmentobject,
      uniforms:uniforms.current,

    })
    
    if(arrayCreated.current===false){
    gltf.scene.traverse((child)=>{
      
      if(child.isMesh){
        const color = [child.material.color.r,child.material.color.g,child.material.color.b]
        console.log(child.userData)
    

        const cloneduniforms ={
          uTime:shaderMaterial.uniforms.uTime,
          uCausticSpeed:{value:1.0},
          uCausticColor:{value: new THREE.Color("#ffffff")},
          uCausticScale:shaderMaterial.uniforms.uCausticScale,
          uCausticOffset:{value:0.53},
          uCausticThickness:{value:0.5},
          uCausticIntensity:{value: 0.28},
          uColor:{value:color}
        };

        const clonedshaderMaterial= new THREE.ShaderMaterial({
          vertexShader: Vertexobject,
          fragmentShader: Fragmentobject,
          uniforms:cloneduniforms,
    
        })

        
        
    
        child.material=clonedshaderMaterial
      
      }
      
    
      }
    )
  arrayCreated.current=true}
 
   
    useFrame((state, delta, xrFrame)=>{
      
      shaderMaterial.uniforms.uTime.value+=delta*0.5
      
      })
    return(
    <>
 
    <primitive scale={0.5} object={gltf.scene}>

    </primitive>
    
  
    {/* <mesh scale={0.5} rotation={[-0.6,0,0]} position={[0,-0.5,0]} receiveShadow castShadow>
        <torusGeometry></torusGeometry>
        <shaderMaterial fragmentShader={Fragmentobject} vertexShader={Vertexobject} uniforms={uniforms.current}/>
    </mesh>

    <mesh ref={obj} rotation={[-1.5,0,0]} scale={4} position={[0,-1,0]} receiveShadow castShadow>
      <planeGeometry></planeGeometry>
      <shaderMaterial fragmentShader={Fragmentobject} vertexShader={Vertexobject} uniforms={uniforms.current}/>

    </mesh> */}
        
        
    </>)
}