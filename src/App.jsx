import { useControls } from 'leva'
import { Canvas,useFrame,useThree } from '@react-three/fiber'
import { useRef,useEffect,useState } from 'react'
import { Summary } from './assets/Summary'
import { Projects } from './assets/Projects'
import { Certs } from './assets/Certs'
import {OrbitControls} from '@react-three/drei'
import Scene from './assets/Scene'
import * as THREE from 'three'
import { Contact } from './assets/Contact'
import gsap from 'gsap'
import { Toolbar } from './assets/Toolbar'

function CameraAdjust({scrollProgress,setpositionofxz}){

  const {camera} = useThree()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useFrame(()=>{
    
    const val = scrollProgress.current.value;
    const posxz=(-49*(scrollProgress.current.value))+11
    camera.position.set(posxz,5,posxz);
    camera.lookAt(new THREE.Vector3(posxz-4,3.5,posxz-4));
    setpositionofxz(posxz)
    //11
    //-5.17
    //-21.34
    //-37.51
  })
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


  const scrollprogress=useRef({value: 0})
  const [positionofxz,setpositionofxz]=useState(0)
  const [activeDiv, setActiveDiv]=useState(0)
  const [animationFinished, setAnimatioFinished]=useState(true)

  useEffect(()=>{
    let isScrollCooldown=false;
    //for desktop
    const handleWheel = (e) =>{
      e.preventDefault()

      if(isScrollCooldown || Math.abs(e.deltaY)<20) return;
      let target
      let divInt
    
      if(e.deltaY>0){
        target =Math.min(scrollprogress.current.value+0.33,0.99)
        setActiveDiv(prev=> { 
          const newval=Math.min(3,prev+1);
          console.log(newval);
          window.scrollTo({top:viewportHeight*newval, behavior:"smooth" })
          return newval
        })
      

        console.log("yeet")
     
      }
      else{
        target =Math.max(scrollprogress.current.value-0.33,0.0)
        setActiveDiv(prev=> { 
          const newval=Math.max(0,prev-1);
          console.log(newval);
          window.scrollTo({top:viewportHeight*newval, behavior:"smooth" })
          return newval
        })
         
        console.log("inverse yeet")
        
      }
      setAnimatioFinished(false);
      
      
      gsap.to(scrollprogress.current,{
        value: target,
        duration:1.7,
        ease:"power3.out",
        onUpdate:()=>{
          const val=scrollprogress.current.value;
        }, 
        onComplete:()=>{
          setAnimatioFinished(true);

        }
      })
      isScrollCooldown=true;
      setTimeout(()=>{
        isScrollCooldown=false
      },1700)
      
    }

//     // let startY = 0;
//     // const handleTouchStart=(e)=>{
//     //   startY=e.touches[0].clientY;
//     // }
//     // const handleTouchMove=(e)=>{
//     //   e.preventDefault();
//     //   const deltaY=startY-e.touches[0].clientY;
//     //   window.scrollBy({
//     //     top:deltaY*0.5,
//     //     behavior:"auto",
//     //   })
//     //   startY=e.touches[0].clientY;
//     // }
  

  window.addEventListener("wheel", handleWheel,{passive:false});
//   // window.addEventListener("touchstart", handleTouchStart,{passive:true});
//   // window.addEventListener("touchmove", handleTouchMove,{passive:false});
  return () => {
    window.removeEventListener("wheel",handleWheel)
//     // window.removeEventListener("touchstart",handleTouchStart)
//     // window.removeEventListener("touchmove",handleTouchMove)
    };
},[]);

  return (<>
  
    <div className="relative bg-red-300" >
    <Toolbar viewportHeight={viewportHeight} setActiveDiv={setActiveDiv} scrollprogress={scrollprogress} activeDiv={activeDiv}></Toolbar>
    
    <div className="grid absolute z-10 inset-0">
      <Summary style={{opacity:(activeDiv==0&&animationFinished)?1:0}} className="transition-opacity duration-100"></Summary>
      <Projects style={{opacity:(activeDiv==1&&animationFinished)?1:0}} className="transition-opacity duration-100 "  X={X} setX={setX}></Projects>
      <Certs style={{opacity:(activeDiv==2&&animationFinished)?1:0}} className="transition-opacity duration-100 "  Y={Y} setY={setY}></Certs>
      <Contact style={{opacity:(activeDiv==3&&animationFinished)?1:0}} className="transition-opacity duration-100 " ></Contact>
    </div>
   
    <Canvas className="" style={{height:"100vh", position:"fixed", background:"#e187c0", touchAction:"pan-y"}}
    shadows>
      <CameraAdjust scrollProgress={scrollprogress} setpositionofxz={setpositionofxz}></CameraAdjust>
      <Scene positionofxz={positionofxz}/>
      {/* <OrbitControls></OrbitControls> */}
    </Canvas>
    
    </div>
    </>
  )
}

export default App
