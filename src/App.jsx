
import { Canvas } from '@react-three/fiber'
import { Summary } from './assets/Summary'
import { Projects } from './assets/Projects'
import { CertsContact } from './assets/CertsContact'
import {OrbitControls } from '@react-three/drei'
import Scene from './assets/Scene'
function App() {
  return (
    <div className="relative">
    {/* <div className="absolute z-10" style={{height:"300vh"}}>
      <Summary></Summary>
      <Projects ></Projects>
      <CertsContact ></CertsContact>
    </div> */}

    <Canvas className="" style={{height:"100vh", position:"fixed"}} camera={{ position: [0, 0, 2] }} shadows>
      <color attach="background" args={["black"]} />
      <Scene />
      <OrbitControls></OrbitControls>
    </Canvas>
    </div>
  )
}

export default App
