import { useEffect,useState } from "react"

export const Resume = ()=>
{

    const [state,changeState] = useState({
        url : ''
        
    })

    useEffect(()=>{
        fetch('https://leightonapi-ibiv1dqah-shortxmas.vercel.app/resume/pdf').then((res) => res.json()).then((json=>{
            changeState({url:json.url})
        }))
        // console.log(state)
    },[])

    return(
        <>
        <div className="py-5">
            <h1 style={{textAlign:"center"}}>Resume</h1>
           <div className="d-flex justify-content-center" >
                
                    
                <div className="col-lg-6 col-12 d-flex justify-content-center p-4" >
                    
                    <img src={state.url} className="img-fluid"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>

                    </img>
                </div>
   
           </div>

        </div>
            
                
           

       
       

           
            
        </>
    )
}