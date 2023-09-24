import {useState,useEffect} from 'react'


import { ProjectCard } from "./ProjectCard"


export const Projects = ()=>{

    const [state,changeState] = useState([{name:'',purpose:'',builtWith:'',date:'',description:''}])

    useEffect(()=>{
        const temp:any[] = []
        fetch('https://leightonapi-ibiv1dqah-shortxmas.vercel.app/projects').then((res) => res.json()).then((json=>{
            // changeState(json)
            for (const [key, value] of Object.entries(json)) {
                // console.log(`${key}: ${value}`);
                temp.push(value)
                console.log(key)
                
            }
            
            changeState(temp)
            // console.log(state)
        }))


        
        
    },[])

   
   
    return(
        <>
        
            


           <div className="py-5">
            <h1 style={{textAlign:"center"}}>Projects</h1>
           <div className=" d-flex  justify-content-center" >
                
                    
                <div className = "col-md-8 col-11">
                    
                    {state.map( (p) =>
            
                    <ProjectCard
                    
                    name = {p.name}
                    description = {p.purpose}
                    languages = {p.builtWith}
                    date = {p.date}
                    info={p.description}
                   
                    />

                    )}
                    
                    

                    
                </div>
                
   
           </div>

            </div>
        
        </>
    )
}