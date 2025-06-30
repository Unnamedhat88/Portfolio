import Text from "./Text.json"
export function Certs(props){
    const lang="English"
    const n=3
    
    const CertsData=[
        {title:"AWS Certified AI Practioner", 
            desc:`Learned the foundational knowledge of using Amazon's AI services such as Rekognition, Polly, Amazon Q.
             I also learned some foundational AI knowledge such as bias and variance, and retrieval-augmented learning(RAG).`
            , img:"cert1AwsHD.png"
            ,link:"https://www.credly.com/badges/98f22b06-b4dd-4dcd-a219-db0d2c32aa81/public_url"
            },

         {title:"Figma UI UX Design Essentials",
         desc: `Learned the software Figma for website UI UX designs, including how to create wireframes, prorotypes, and design components
         . Also learned about intuitive website design both on mobile and PC.`
         , img:"Cert2Figma.jpg"
         ,link:"https://www.udemy.com/certificate/UC-0517c98b-5969-42ac-b170-dca57e23650f/"
        },

        {title:"React Three Fiber",
         desc: `Learned React Three Fiber which allows developers to render and interact with 3D objects directly inside of the browser
        using React. As well as learned the essential 3D scene elements such as camera, lighting, and object controls.`
         , img:"Cert3R3F.jpg"
         ,link:"https://www.udemy.com/certificate/UC-5a4ce06c-20e1-4d04-bb6f-c1427ac598cf/"
        },

    ]
    const Cert_card = (props) =>{
        return(
        <div className="grid my-4 bg-red-100 rounded-xl" style={{marginInline:"20px",height: '550px' }}>
            <div className="flex py-10 px-10">
            <img  src={`${import.meta.env.BASE_URL}images/${CertsData[props.Y].img}`} className="object-scale-down" style={{width:"500px", height:"350px"}}></img>
                <div className=" ml-5 flex-1 flex flex-col justify-between ">
                    <div>
                    <p className="mx-6 text-5xl font-bold">{CertsData[props.Y].title}</p>
                    <p className="mx-6 text-xl pt-2">{CertsData[props.Y].desc}</p>
                    </div >
                        <div className="flex justify-center pt-8">
                        <div className={`border-gray-700 border bg-yellow-300 px-8 py-2 text-lg rounded-xl cursor-pointer${(CertsData[props.Y].prototypeLink=="NA")?"invisible":""}`} onClick={()=>window.open(CertsData[props.Y].link,"_blank")}>Link</div>
                    </div>
                    <div className="-mb-6 flex gap-3">
                        {CertsData.map((_roots,index)=>(
                             <div key={index} className={` rounded-full ${index==props.Y?"bg-yellow-600":"bg-gray-400 "}`} style={{height:"20px",width:"20px"}}></div>   
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
                    <div className="text-5xl mx-8" style={{fontWeight:"600",letterSpacing:"-1px"}}>{Text[lang].Certificate}</div>
                    <div className="font-medium mt-2 mx-16 text-2xl semi-bold">{Text[lang].Certificate_desc}</div>
                    <div className="relative flex items-center gap-0 px-6">
                        <div className=" py-4 px-4 bg-green-300 rounded-xl left-2" onClick={()=>props.setY((props.Y-1+n)%n)}>Previous</div>
                        <Cert_card Y={props.Y} setY={props.setY}></Cert_card>
                        <div className=" py-4 px-8 bg-green-300 rounded-xl right-2" onClick={()=>props.setY((props.Y+1)%n)}>Next</div>
                    </div>
                </div>


            </div>

        </div>

    )
}