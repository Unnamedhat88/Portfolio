import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";
import Vertexobject from "../Shaders/Object.vert";
import Fragmentobject from "../Shaders/Object.frag"
export default function Object(){
    const { uCausticSpeed,uCausticOffset,uCausticThickness } = useControls({ 
        Speed: {value:1.0,min:-10,max:10,step:1, onChange: (v)=>obj.current.material.uniforms.uCausticSpeed.value=v},
        Offset: {value:0.53,min:-1,max:1,step:0.01, onChange: (v)=>obj.current.material.uniforms.uCausticOffset.value=v},
        Thickness: {value:0.5,min:-2,max:2,step:0.1, onChange: (v)=>obj.current.material.uniforms.uCausticThickness.value=v},
        Intensity: {value:0.28,min:-10,max:10,step:0.01, onChange: (v)=>obj.current.material.uniforms.uCausticIntensity.value=v},
        Scale: {value:3.86,min:-10,max:10,step:0.01, onChange: (v)=>obj.current.material.uniforms.uCausticScale.value=v}
})

    const obj=useRef();
        const uniforms = useRef({
          uTime:{value:0},
          uCausticSpeed:{value:1.0},
          uCausticColor:{value: new THREE.Color("#ffffff")},
          uCausticScale:{value:10.0},
          uCausticOffset:{value:0},
          uCausticThickness:{value:0.4},
          uCausticIntensity:{value: 1.0}

        });
    useFrame((state, delta, xrFrame)=>{
        if(obj.current){
            obj.current.material.uniforms.uTime.value+=delta*0.5;
      }})
    return(
    <>
    <mesh scale={0.5} rotation={[-0.6,0,0]} position={[0,-0.5,0]} receiveShadow castShadow>
        <torusGeometry></torusGeometry>
        <shaderMaterial fragmentShader={Fragmentobject} vertexShader={Vertexobject} uniforms={uniforms.current}/>
    </mesh>

    <mesh ref={obj} rotation={[-1.5,0,0]} scale={4} position={[0,-1,0]} receiveShadow castShadow>
      <planeGeometry></planeGeometry>
      <shaderMaterial fragmentShader={Fragmentobject} vertexShader={Vertexobject} uniforms={uniforms.current}/>

    </mesh>
        
        
    </>)
}