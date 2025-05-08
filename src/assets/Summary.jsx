import Text from "./Text.json"
export function Summary(){
    const lang="English"
    return (
        <div className=" h-screen grid">
            <div className=" mx-32 my-32">
                <div className="text-5xl" style={{fontWeight:"600",letterSpacing:"-1px"}}>{Text[lang].greeting}</div>
                <div className="mt-10 mx-16 text-2xl semi-bold">
                <div className="font-medium">{Text[lang].summary}</div>
                <div className="mt-10 font-medium"><span className="font-bold">{Text[lang].Tech_Stack}</span>   Python, Java, Html, Css, Javascript, React, Three.js, React Three Fiber, Tailwind, WebGL, GLSL, Typescript</div>
                <div className="mt-5 font-medium"><span className="font-bold">{Text[lang].Other_Skills}</span>   Figma, Blender</div>
                </div>


            </div>
           
        </div>
    )
}