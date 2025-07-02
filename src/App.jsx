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
  const positionofxz=(-45*(scrollprogress))+7.5
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

  const [viewportHeight, setViewportHeight]=useState(window.innerHeight);

  //for handling device resize
  useEffect(()=>{
    const handleResize = () =>{
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener("resize",handleResize);
    return ()=> window.removeEventListener("resize", handleResize);
  },[]);

  const sectionCount=4
  const gapSize=viewportHeight*0.3;
  const scrollContainerHeight=sectionCount*viewportHeight+(gapSize*(sectionCount-1))



  const [scrollprogress,setScrollProgress]=useState(0)

  const handleScroll=()=>{
    const position=window.scrollY;
    const progress=position/(scrollContainerHeight-viewportHeight);
    setScrollProgress(Math.min(Math.max(progress,0),1))
    
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll,{passive:true})
    return()=>{
      window.removeEventListener("scroll",handleScroll);

    }
  },[scrollContainerHeight,viewportHeight])

  
  return (
    <div className="relative" >
    <div className="grid absolute z-10" style={{height:`${scrollContainerHeight}px`, gap:`${gapSize}px`}}>
      <Summary style={{opacity:(scrollprogress<0.22)?1:0}} className="transition-opacity duration-300"></Summary>
      <Projects style={{opacity:(scrollprogress>=0.27&&scrollprogress<0.48)?1:0}} className="transition-opacity duration-300"  X={X} setX={setX}></Projects>
      <Certs style={{opacity:(scrollprogress>=0.53&&scrollprogress<0.73)?1:0}} className="transition-opacity duration-300"  Y={Y} setY={setY}></Certs>
      <Contact style={{opacity:(scrollprogress>=0.77)?1:0}} className="transition-opacity duration-300" ></Contact>
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
