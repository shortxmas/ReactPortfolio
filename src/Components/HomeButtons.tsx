import rbut from '../assets/resume.png'
import pbut from '../assets/projects.png'
import cbut from '../assets/contact.png'
import {Link} from "react-router-dom";


export function HomeButtons(){

    return(

        <>
            <div>
            
                <div id="button">
                    <Link to="/resume">
                        <a className="buttons">
                            <img src={rbut} width="107.5px" />
                        </a>
                    </Link>   


                    <Link to="/projects">
                        <a className="buttons" >
                            <img src={pbut} width="107.5px" />
                        </a>
                    </Link>
                    
                    <Link to="/contact">
                        <a className="buttons" >
                            <img src={cbut} width="107.5px" />
                        </a>
                    </Link>
                </div>
                
                
            

            
            </div>
        
        
        
        </>
    )


}