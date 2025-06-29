import { useControls } from 'leva'
import { Canvas,useThree } from '@react-three/fiber'
import { useRef,useEffect,useState } from 'react'
import { Summary } from './assets/Summary'
import { Projects } from './assets/Projects'
import { Certs } from './assets/Certs'
import {OrbitControls} from '@react-three/drei'
import Scene from './assets/Scene'
import * as THREE from 'three'
import { Contact } from './assets/Contact'

function CameraAdjust({scrollprogress}){

  const {camera} = useThree()
  console.log(scrollprogress)
  const positionofxz=(-29*(scrollprogress))+7.5
  // console.log(positionofxz)

  

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  useEffect(()=>{
    
    console.log(positionofxz)
    camera.position.set(positionofxz,5,positionofxz);
    camera.lookAt(new THREE.Vector3(positionofxz-4,3.5,positionofxz-4));
    
    

  },[positionofxz])
}

function App() {
  const [X, setX]=useState(0);
  const [Y, setY]=useState(0);

  const [scrollprogress,setScrollProgress]=useState(0)
  console.log(scrollprogress)

  const handleScroll=()=>{
    const position=window.pageYOffset;
    setScrollProgress(position/2377)
    
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll,{passive:true})
    return()=>{
      window.removeEventListener("scroll",handleScroll);

    }
  },[])

  
  return (
    <div className="relative" >
    <div className="grid absolute z-10" style={{height:"500vh", gap:"55vh"}}>
      <Summary style={{opacity:(scrollprogress<0.125)?1:0}} className="transition-opacity duration-300"></Summary>
      <Projects style={{opacity:(scrollprogress>0.4&&scrollprogress<0.6)?1:0}} className="transition-opacity duration-300"  X={X} setX={setX}></Projects>
      <Certs style={{opacity:(scrollprogress>0.90&&scrollprogress<1.2)?1:0}} className="transition-opacity duration-300"  Y={Y} setY={setY}></Certs>
      <Contact style={{opacity:(scrollprogress>1.3)?1:0}} className="transition-opacity duration-300" ></Contact>
    </div>

    <Canvas className="" style={{height:"100vh", position:"fixed", backgroundImage: "linear-gradient(rgb(255,197,253) ,rgb(246,155,213),rgb(216,90,91))"}} 
    shadows>
      <CameraAdjust scrollprogress={scrollprogress}></CameraAdjust>
      <Scene />
      {/* <OrbitControls></OrbitControls> */}
    </Canvas>
    </div>
  )
}

export default App
