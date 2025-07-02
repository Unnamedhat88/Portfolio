import Text from "./Text.json"
export function Certs(props){
    const lang="English"
    const n=3
    
    const CertsData=[
        {title:"AWS Certified AI Practioner", 
            desc:`Learned the foundational knowledge of using Amazon's AI services such as Rekognition, Polly, Amazon Q.
             I also learned some foundational AI knowledge such as bias and variance, and retrieval-augmented learning(RAG).`
            , img:"https://unnamedhat88.github.io/Portfolio/images/cert1AwsHD.png"
            ,link:"https://www.credly.com/badges/98f22b06-b4dd-4dcd-a219-db0d2c32aa81/public_url"
            },

         {title:"Figma UI UX Design Essentials",
         desc: `Learned the software Figma for website UI UX designs, including how to create wireframes, prorotypes, and design components
         . Also learned about intuitive website design both on mobile and PC.`
         , img:"https://unnamedhat88.github.io/Portfolio/images/Cert2Figma.jpg"
         ,link:"https://www.udemy.com/certificate/UC-0517c98b-5969-42ac-b170-dca57e23650f/"
        },

        {title:"React Three Fiber",
         desc: `Learned React Three Fiber which allows developers to render and interact with 3D objects directly inside of the browser
        using React. As well as learned the essential 3D scene elements such as camera, lighting, and object controls.`
         , img:"https://unnamedhat88.github.io/Portfolio/images/Cert3R3F.jpg"
         ,link:"https://www.udemy.com/certificate/UC-5a4ce06c-20e1-4d04-bb6f-c1427ac598cf/"
        },

    ]
    const Cert_card = (props) =>{
        return(<>
        <div className="grid my-4 bg-red-100 rounded-xl mx-4 sm:mx-6 md:mx-10" style={{marginInline:"20px",minHeight: '550px' }}>
            <div className="flex flex-col md:flex-row py-6 px-6 md:px-10 gap-6 md:gap-10 items-center">
            <img  src={CertsData[props.Y].img} className="object-contain rounded-lg w-full md:w-[500px] h-[250px] md:h-[350px]" style={{width:"500px", height:"350px"}}></img>
                <div className=" ml-0 md:ml-5 flex-1 flex flex-col justify-between">
                    <div>
                    <p className="text-3xl md:text-5xl font-bold mb-4">{CertsData[props.Y].title}</p>
                    <p className="text-base md:text-xl ">{CertsData[props.Y].desc}</p>
                    </div >
                        <div className="flex justify-center md:justify-start pt-8">
                        <div className={`border-gray-700 border bg-yellow-300 px-8 py-2 text-lg rounded-xl cursor-pointer${(CertsData[props.Y].prototypeLink=="NA")?"invisible":""}`} onClick={()=>window.open(CertsData[props.Y].link,"_blank")}>Link</div>
                    </div>
                    
                </div>
               
            </div>
            <div className="mt-6 -mb-6 flex gap-3 justify-center ">
            {CertsData.map((_roots,index)=>(
            <div key={index} className={` rounded-full ${index==props.Y?"bg-yellow-600":"bg-gray-400 "}`} style={{height:"20px",width:"20px"}}></div>   
        ))}
            </div>
        </div>
       
        </>)
    }

    
    return (
         <div className={`h-screen grid ${props.className}`} style={props.style}>
             <div className="relative mx-4 md:mx-16 my-10">
                <div className="absolute h-full w-full bg-red-100 rounded-xl" style={{opacity:"0.6"}}></div>
                <div className="relative z-20 my-4 px-2 md:px-6">
                    <div className="text-3xl md:text-5xl font-semibold mx-2 md:mx-8" style={{letterSpacing:"-1px"}}>{Text[lang].Certificate}</div>
                    <div className="font-medium mt-2 mx-2 md:mx-16 text-base md:text-2xl semi-bold">{Text[lang].Certificate_desc}</div>
                    <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0 mt-6 px-2 md:px-6">
                        <div className="py-3 px-6 bg-green-300 rounded-xl w-full md:w-auto text-center" onClick={()=>props.setY((props.Y-1+n)%n)}>Previous</div>
                        <Cert_card Y={props.Y} setY={props.setY}></Cert_card>
                        <div className="py-3 px-6 bg-green-300 rounded-xl w-full md:w-auto text-center" onClick={()=>props.setY((props.Y+1)%n)}>Next</div>
                    </div>
                </div>

              


            </div>

        </div>

    )
}