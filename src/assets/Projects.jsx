import Text from "./Text.json"
export function Projects(){
    const lang="English"
    return (
        <div className=" h-screen grid">
             <div className=" mx-32 my-32" style={{marginRight:"70rem"}}>
                <div className="text-5xl" style={{fontWeight:"600",letterSpacing:"-1px"}}>{Text[lang].Projects}</div>
                <div className="font-medium mt-10 mx-16 text-2xl semi-bold">{Text[lang].Project_desc}</div>



            </div>

        </div>
    )
}