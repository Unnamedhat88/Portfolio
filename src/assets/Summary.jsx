import Text from "./Text.json"
export function Summary(props){
    const lang="English"
    return (
        <div className={`h-screen grid ${props.className}`} style={props.style}>
            <div className="relative mx-6 md:mx-16 lg:mx-32 my-10 lg:my-24 ">
                <div className="absolute h-full w-full bg-red-100 rounded-xl" style={{opacity:"0.6"}}></div>
                <div className="relative z-20 mx-4 my-4">
                    <div className="flex mx-4">
                        <div className="text-3xl md:text-5xl pt-4 md:pt-6" style={{fontWeight:"600",letterSpacing:"-1px"}}>{Text[lang].greeting}</div>
                        <img className="ml-auto pt-2 md:pt-4 cursor-pointer w-[60px] md:w-[80px] lg:w-[100px] h-auto object-contain" src="https://unnamedhat88.github.io/Portfolio/images/aws-certified-ai-practitioner.png" style={{width:"100px"}} onClick={()=>window.open("https://www.credly.com/badges/98f22b06-b4dd-4dcd-a219-db0d2c32aa81/public_url","_blank")}></img>
                    </div>
                    <div className="mt-8 md:mt-10 mx-4 md:mx-10 text-lg md:text-2xl">
                    <div className="font-medium">{Text[lang].summary}</div>
                    <div className="mt-6 md:mt-10 font-medium"><span className="font-bold">{Text[lang].Tech_Stack}</span>   Python, Java, Html, Css, Javascript, React, Three.js, React Three Fiber, Tailwind, WebGL, GLSL, Typescript</div>
                    <div className="mt-4 font-medium md:pb-4"><span className="font-bold">{Text[lang].Other_Skills}</span>   Figma, Blender</div>
                </div>
                </div>


            </div>
           
        </div>
    )
}