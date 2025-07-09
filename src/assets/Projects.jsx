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
            , img:"https://unnamedhat88.github.io/Portfolio/images/proj1.png"
            , tech:"Technology used : Keras, Python, React, Flask, SQLAlchemy, Tailwind CSS"
            ,prototypeLink:"NA"
            , GithubLink:"NA"},

         {title:"3D Portfolio website",
         desc: `I created a portfolio website that has all my introductions, projects, certificates, and ways
        to contact me. I achieved this by using R3F (React three fiber) for the 3D background and React. I also
        learned GLSL for the water caustic. For the model, I created it in Blender.`
         , img:"https://unnamedhat88.github.io/Portfolio/images/proj2.png"
         , tech:"Technology used : React, R3F, GLSL, Blender, Tailwind CSS"
         ,prototypeLink:"NA"
         , GithubLink:"NA"},

    ]
    const Project_card = (props) =>{
        return(
        <div className="grid my-4 bg-red-100 rounded-xl mx-4 sm:mx-6 md:mx-10 lg:mx-20" style={{marginInline:"20px",height: '550px' }}>
            <div className="flex flex-col md:flex-row py-6 px-6 md:px-10 gap-6 md:gap-10">
            <img src={ProjectsData[props.X].img} className="object-cover w-full md:w-[500px] h-[250px] md:h-[350px]" style={{width:"500px", height:"350px"}}></img>
                <div className=" ml-5 flex-1 flex flex-col justify-between ">
                    <div>
                        <p className="text-3xl md:text-5xl font-bold mb-4">{ProjectsData[props.X].title}</p>
                        <p className="text-sm md:text-sm mb-4">{ProjectsData[props.X].desc}</p>
                        <p className="text-base md:text-xl font-medium">{ProjectsData[props.X].tech}</p>
                    </div >
                        <div className="flex justify-between  mt-8 mx-4 md:mx-16">
                        <div className={`bg-yellow-300 px-5 py-4 text-lg rounded-xl ${(ProjectsData[props.X].prototypeLink=="NA")?"invisible":""}`}>Visit prototype</div>
                        <div className={`bg-gray-300 px-5 py-4 text-lg rounded-xl ${(ProjectsData[props.X].prototypeLink=="NA")?"invisible":""}`}>View on Github</div>
                    </div>
                    <div className="mt-6 flex gap-3 justify-center md:justify-start">
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
             <div className="relative mx-4 md:mx-16 my-10">
                <div className="absolute h-full w-full bg-red-100 rounded-xl" style={{opacity:"0.6"}}></div>
                <div className="relative z-20 my-4 px-2 md:px-6">
                    <div className="text-3xl md:text-5xl font-semibold mx-2 md:mx-8" style={{fontWeight:"600",letterSpacing:"-1px"}}>{Text[lang].Projects}</div>
                    <div className="font-medium mt-2 mx-2 md:mx-16 text-base md:text-2xl semi-bold">{Text[lang].Project_desc}</div>
                    <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0 mt-6 px-2 md:px-6">
                        <div className=" py-3 px-6 bg-green-300 rounded-xl w-full md:w-auto text-center" onClick={()=>props.setX((props.X-1+n)%n)}>Previous</div>
                        <Project_card X={props.X} setX={props.setX}></Project_card>
                        <div className="py-3 px-6 bg-green-300 rounded-xl w-full md:w-auto text-center" onClick={()=>props.setX((props.X+1)%n)}>Next</div>
                    </div>
                </div>


            </div>

        </div>

    )
}