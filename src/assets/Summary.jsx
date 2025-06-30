import Text from "./Text.json"
export function Summary(props){
    const lang="English"
    return (
        <div className={`h-screen grid ${props.className}`} style={props.style}>
            <div className="relative mx-32 my-32 ">
                <div className="absolute h-full w-full bg-red-100 rounded-xl" style={{opacity:"0.6"}}></div>
                <div className="relative z-20 mx-4 my-4">
                    <div className="flex mx-4">
                        <div className="text-5xl pt-6" style={{fontWeight:"600",letterSpacing:"-1px"}}>{Text[lang].greeting}</div>
                        <img className="ml-auto pt-4 cursor-pointer" src="https://unnamedhat88.github.io/Portfolio/images/aws-certified-ai-practitioner.png" style={{width:"100px"}} onClick={()=>window.open("https://www.credly.com/badges/98f22b06-b4dd-4dcd-a219-db0d2c32aa81/public_url","_blank")}></img>
                    </div>
                    <div className="mt-10 mx-16 text-2xl semi-bold">
                    <div className="font-medium">{Text[lang].summary}</div>
                    <div className="mt-10 font-medium"><span className="font-bold">{Text[lang].Tech_Stack}</span>   Python, Java, Html, Css, Javascript, React, Three.js, React Three Fiber, Tailwind, WebGL, GLSL, Typescript</div>
                    <div className="mt-5 font-medium"><span className="font-bold">{Text[lang].Other_Skills}</span>   Figma, Blender</div>
                </div>
                </div>


            </div>
           
        </div>
    )
}