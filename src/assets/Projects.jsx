import Text from "./Text.json"
export function Projects(props){
    const lang="English"
    const n=2
    
    const ProjectsData=[
        {title:"Pollen Mapping System", 
            desc:`My team made a full stack website to display pollenous flowers on a map, 
                this project aims to help people with pollen allergies by showing highly 
                pollenous areas. The full stack was built using React for the front end, Python Flask for the backend, and SQLAlchemy 
                for the database. We also implemented a model to classify the flower with a 0.86 accuracy`
            , img:"proj1.png"
            , tech:"Technology used : Keras, Python, React, Flask, SQLAlchemy, Tailwind CSS"
            ,prototypeLink:"NA"
            , GithubLink:"NA"},

         {title:"3D Portfolio website",
         desc: `I created a portfolio website that has all my introductions, projects, certificates, and ways
        to contact me. I achieved this by using R3F (React three fiber) for the 3D background and React. I also
        learned GLSL for the water caustic. For the model, I created it in Blender.`
         , img:"proj2.png"
         , tech:"Technology used : React, R3F, GLSL, Blender, Tailwind CSS"
         ,prototypeLink:"NA"
         , GithubLink:"NA"},

    ]
    const Project_card = (props) =>{
        return(
        <div className="grid my-4 bg-red-100 rounded-xl" style={{marginInline:"20px",height: '550px' }}>
            <div className="flex py-10 px-10">
            <img src={`${import.meta.env.BASE_URL}images/${ProjectsData[props.X].img}`} className="object-cover" style={{width:"500px", height:"350px"}}></img>
                <div className=" ml-5 flex-1 flex flex-col justify-between ">
                    <div>
                        <p className="mx-6 text-5xl font-bold">{ProjectsData[props.X].title}</p>
                        <p className="mx-6 text-xl pt-2">{ProjectsData[props.X].desc}</p>
                        <p className="mx-6 text-xl pt-4">{ProjectsData[props.X].tech}</p>
                    </div >
                        <div className="flex justify-between mx-32 pt-8">
                        <div className={`bg-yellow-300 px-5 py-4 text-lg rounded-xl ${(ProjectsData[props.X].prototypeLink=="NA")?"invisible":""}`}>Visit prototype</div>
                        <div className={`bg-gray-300 px-5 py-4 text-lg rounded-xl ${(ProjectsData[props.X].prototypeLink=="NA")?"invisible":""}`}>View on Github</div>
                    </div>
                    <div className="-mb-6 flex gap-3">
                        {ProjectsData.map((_roots,index)=>(
                             <div key={index} className={` rounded-full ${index==props.X?"bg-yellow-600":"bg-gray-400 "}`} style={{height:"20px",width:"20px"}}></div>   
                        ))}
                       
                    </div>
                </div>
               
            </div>
            
            
        </div>)
    }

    
    return (
         <div className={`h-screen grid ${props.className}`} style={props.style}>
             <div className="relative mx-24 my-10">
                <div className="absolute h-full w-full bg-red-100 rounded-xl" style={{opacity:"0.6"}}></div>
                <div className="relative z-20  my-4">
                    <div className="text-5xl mx-8" style={{fontWeight:"600",letterSpacing:"-1px"}}>{Text[lang].Projects}</div>
                    <div className="font-medium mt-2 mx-16 text-2xl semi-bold">{Text[lang].Project_desc}</div>
                    <div className="relative flex items-center gap-0 px-6">
                        <div className=" py-4 px-4 bg-green-300 rounded-xl left-2" onClick={()=>props.setX((props.X-1+n)%n)}>Previous</div>
                        <Project_card X={props.X} setX={props.setX}></Project_card>
                        <div className=" py-4 px-8 bg-green-300 rounded-xl right-2" onClick={()=>props.setX((props.X+1)%n)}>Next</div>
                    </div>
                </div>


            </div>

        </div>

    )
}