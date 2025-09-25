import Text from "./Text.json"
export function Contact({animateCamera,cameraBusy,originalCameraPosition,originalLookAt,camera, positionofxz,zoomedin,setZoomedin}){
    const lang="English"
    const n=3
    
    const links=[
        {   
            img:""
            ,link:"https://github.com/Unnamedhat88",
            title:"Github",
            color:"lightgray"
        
        },
        {
            img:""
            ,link:"https://www.linkedin.com/in/brandon-pratama-kwee-354576302/",
            title:"LinkedIn",
            color:"#7092ff"
          
        },
        
            

        

    ]
    
    return (<div className={` grid rounded-2xl` } style={{width:"100%", height:"100%", pointerEvents:zoomedin?"auto":"none", backgroundImage:"url('/images/phonewp.webp')"}}>
         
             
                <div className="absolute h-full w-full rounded-xl " style={{opacity:"0.6"}}></div>
                <div className="relative z-20  my-4  flex-col justify-center items-center">
                    <div className="text-5xl mx-8" style={{fontWeight:"600",letterSpacing:"-1px"}}>{Text[lang].Contact}</div>
                    <div className="font-medium mt-2 mx-16 text-2xl semi-bold">{Text[lang].Contact_Me}</div>
                    <div className="relative grid items-center gap-4 px-6 mt-10 ">
                       {links.map((item,index)=>(
                             <div className="rounded-xl cursor-pointer bg-red-100 flex items-center justify-center py-4" key={index} style={{height:"100px",width:"300px", backgroundColor:links[index].color}} 
                             onClick={()=>{ 
                                window.open(item.link,"_blank")}}>
                                <p className="text-3xl">{item.title}</p>
                             </div>   
                        ))}
                        
                    </div>
                    
             

                <div className="absolute rounded-xl cursor-pointer bg-red-200 flex items-center justify-center py-4"  style={{height:"100px",width:"300px", bottom:"20px", left:"6.5%"}} 
                             onClick={()=>{
                                if(cameraBusy.current==false)return;
                                animateCamera(camera,{pos:{x:positionofxz,y:5,z:positionofxz}, target:{x:positionofxz-4,y:3.5,z:positionofxz-4}},cameraBusy,zoomedin)
                                setZoomedin(false)
                                }}>
                            <p className="text-3xl">Go back</p>
                </div>  

            </div>
           
                

                
              

               


            
           
        </div>

    )
}