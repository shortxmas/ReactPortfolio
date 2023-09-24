import rbut from '../assets/resume.png'
import pbut from '../assets/projects.png'
import cbut from '../assets/contact.png'


export function HomeButtons(){

    return(

        <>
            <div>
            
                <div id="button">
                    
                        <a className="buttons">
                            <img src={rbut} width="107.5px" />
                        </a>
                    


                    
                        <a className="buttons" >
                            <img src={pbut} width="107.5px" />
                        </a>
                    
                    
                    
                        <a className="buttons" >
                            <img src={cbut} width="107.5px" />
                        </a>
                    
                </div>
                
                
            

            
            </div>
        
        
        
        </>
    )


}