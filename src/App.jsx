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

function CameraAdjust({positionofxz}){

  const {camera} = useThree()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  useEffect(()=>{
    
    console.log(positionofxz)
    camera.position.set(positionofxz,5,positionofxz);
    camera.lookAt(new THREE.Vector3(positionofxz-4,3.5,positionofxz-4));
    
    

  },[positionofxz])
  return null;
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

  const positionofxz=(-49*(scrollprogress))+12.5

  useEffect(()=>{
    //for desktop
    const handleWheel = (e) =>{
      e.preventDefault()
      window.scrollBy({
        top: e.deltaY*0.5,
        behavior:"auto",
      })
    }

    let startY = 0;
    const handleTouchStart=(e)=>{
      startY=e.touches[0].clientY;
    }
    const handleTouchMove=(e)=>{
      e.preventDefault();
      const deltaY=startY-e.touches[0].clientY;
      window.scrollBy({
        top:deltaY*0.5,
        behavior:"auto",
      })
      startY=e.touches[0].clientY;
    }
  

  window.addEventListener("wheel", handleWheel,{passive:false});
  window.addEventListener("touchstart", handleTouchStart,{passive:true});
  window.addEventListener("touchmove", handleTouchMove,{passive:false});
  return () => {
    window.removeEventListener("wheel",handleWheel)
    window.removeEventListener("touchstart",handleTouchStart)
    window.removeEventListener("touchmove",handleTouchMove)};
},[]);

  return (
    <div className="relative" >
    <div className="grid absolute z-10" style={{height:`${scrollContainerHeight}px`, gap:`${gapSize}px`}}>
      <Summary style={{opacity:(scrollprogress<0.03)?1:0}} className="transition-opacity duration-300"></Summary>
      <Projects style={{opacity:(scrollprogress>=0.27&&scrollprogress<0.41)?1:0}} className="transition-opacity duration-300"  X={X} setX={setX}></Projects>
      <Certs style={{opacity:(scrollprogress>=0.58&&scrollprogress<0.73)?1:0}} className="transition-opacity duration-300"  Y={Y} setY={setY}></Certs>
      <Contact style={{opacity:(scrollprogress>=0.9)?1:0}} className="transition-opacity duration-300" ></Contact>
    </div>
   
    <Canvas className="" style={{height:"100vh", position:"fixed", background:"#e187c0"}}
    shadows>
      <CameraAdjust positionofxz={positionofxz}></CameraAdjust>
      <Scene positionofxz={positionofxz}/>
      {/* <OrbitControls></OrbitControls> */}
    </Canvas>
    </div>
  )
}

export default App
