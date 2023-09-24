

import Logo from "../assets/logoletters4.png"





  

export function Navbar() 
{
    
  return (
    <>
      
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
            <div className="container">

                <a className="navbar-brand">
            
                    
                        <a className="nav-link" href="#top">
                            <img src={Logo} width="50" className="d-inline-block align-top"></img>
                        </a>
                   
                    

                </a>

                <button className="navbar-toggler" data-bs-toggle = "collapse"
                data-bs-target = "#nav" aria-controls = "nav" aria-label=
                "Expand Navigation">
                    <span className="navbar-toggler-icon">

                    </span>
    
                </button>

                <div className= "collapse navbar-collapse"  id="nav">
                    <ul className="navbar-nav navbar-right nav-routes">
                    
                    
                      
                        <li className="nav-item">
                            <a href="#aboutme" className="nav-link">About me</a>
                        </li>

                    
                        <li className="nav-item">
                            <a href="#resume" className="nav-link">Resume</a>
                        </li>
                   

                  
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                  
                    

                 
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                  

                    </ul>
                </div>
                

                <span className="navbar-text" style={{color:'mintcream'}}>
                    <h6>
                    Information & Computer Science Student
                    </h6>
                </span>
        
             

            </div>
            
        
        </nav>
       
       

        

    
      
      


    </>
  )
}