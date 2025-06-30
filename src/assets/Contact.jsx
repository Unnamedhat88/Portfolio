import Text from "./Text.json"
export function Contact(props){
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
        {
            img:""
            ,link:"mailto:brandon.portfolio88@gmail.com",
            title:"Gmail",
            color:"red"
      
        },
            

        

    ]
    
    return (
         <div className={`h-screen grid ${props.className}`} style={props.style}>
             <div className="relative mx-24 my-10">
                <div className="absolute h-full w-full bg-red-100 rounded-xl" style={{opacity:"0.6"}}></div>
                <div className="relative z-20  my-4">
                    <div className="text-5xl mx-8" style={{fontWeight:"600",letterSpacing:"-1px"}}>{Text[lang].Contact}</div>
                    <div className="font-medium mt-2 mx-16 text-2xl semi-bold">{Text[lang].Contact_Me}</div>
                    <div className="relative grid items-center gap-4 px-6 mt-10 mx-10">
                       {links.map((_roots,index)=>(
                             <div className="rounded-xl cursor-pointer bg-red-100 flex items-center justify-center py-4" key={index} style={{height:"100px",width:"300px", backgroundColor:links[index].color}} onClick={()=>window.open(links[index].link,"_blank")}>
                                {/* <img className="h-full " src={links[index].img}></img> */}
                                <p className="text-3xl">{links[index].title}</p>
                             </div>   
                        ))}
                    </div>
                    
                </div>


            </div>

        </div>

    )
}