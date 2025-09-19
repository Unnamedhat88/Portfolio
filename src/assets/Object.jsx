import { useFrame,useLoader } from "@react-three/fiber";
import { useRef,useEffect,useState } from "react";
import { useControls } from "leva";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from "three";
import Vertexobject from "../Shaders/Object.vert";
import Fragmentobject from "../Shaders/Object.frag"
import { Html } from "@react-three/drei";
import { uniform } from "three/src/nodes/TSL.js";
export default function Object({positionofxz}){
    const [vendingScreen, setVendingScreen]=useState(null)
    const gltf = useLoader(GLTFLoader, 'images/models/environment.glb')

        const uniforms = useRef({
          uTime:{value:0},
          uCausticSpeed:{value:1.0},
          uCausticColor:{value: new THREE.Color("#ffffff")},
          uCausticScale:{value:27.4},
          uCausticOffset:{value:0.66},
          uCausticThickness:{value:0.5},
          uCausticIntensity:{value: 0.28},
          uFogColor: { value: new THREE.Color("#EBA2CC") },
          uFogDensity: { value: 0.06 },         
          uCamPos:{ value: new THREE.Vector3(positionofxz-4,3.5,positionofxz-4) }             

        });
      
    useEffect(()=>{
      gltf.scene.traverse((child)=>{
        
        
        if(child.isMesh && child.material && child.material.color){
          const cloneduniforms ={
            ...uniforms.current, uColor:{value: child.material.color.clone()}
          };
          
          const clonedshaderMaterial= new THREE.ShaderMaterial({
            vertexShader: Vertexobject,
            fragmentShader: Fragmentobject,
            uniforms:cloneduniforms,
          })
        
          child.material=clonedshaderMaterial
          console.log(child.name)

          // if (child.name==="vendingMachineScreen"){
          //   console.log("found you")
          //   setVendingScreen(child)
          // }
          
        }
      })
  },[])
 
   
    useFrame((state, delta, xrFrame)=>{
      uniforms.current.uTime.value+=delta*0.5
      uniforms.current.uCamPos.value.set(positionofxz-4,3.5,positionofxz-4)
    })

    return(
    <>
    <primitive scale={0.5} object={gltf.scene}/>
    {/* {vendingScreen && (
      <Html parent={vendingScreen} position={[0,0,0]} transform distanceFactor={1} center>
        <div className="bg-red-300 w-full h-full">
          testing
        </div>

      </Html>
    )

    }
     */}
    </>)
}