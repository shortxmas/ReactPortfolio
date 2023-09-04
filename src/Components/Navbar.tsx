import { BrowserRouter,Link} from "react-router-dom";

import Logo from "../assets/logoletters4.png"
import { RouterLinks } from "./Routes";




  

export function Navbar() 
{
    
  return (
    <>
      
    <BrowserRouter>
        <div className="navbar navbar-expand-lg navbar-dark  bg-dark" >
            <div className="container">

                <a className="navbar-brand">
            
                    <Link to="/" style={{ textDecoration: 'none'}}>
                        <a className="nav-link">
                            <img src={Logo} width="85" className="d-inline-block align-top"></img>
                        </a>
                    </Link>
                    

                </a>

                <button className="navbar-toggler" data-bs-toggle = "collapse"
                data-bs-target = "#nav" aria-controls = "nav" aria-label=
                "Expand Navigation">
                    <span className="navbar-toggler-icon">

                    </span>
    
                </button>

                <div className= "collapse navbar-collapse"  id="nav">
                    <ul className="navbar-nav navbar-right nav-routes">
                    
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                    </Link>

                    <Link to="/resume" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Resume</a>
                        </li>
                    </Link>

                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Projects</a>
                        </li>
                    </Link>
                    

                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </Link>

                    </ul>
                </div>
                

                <span className="navbar-text" style={{color:'mintcream'}}>
                    <h6>
                    Information & Computer Science Student
                    </h6>
                </span>
        
            
            </div>
        
        
        </div>
        <RouterLinks/>

        

    </BrowserRouter>
      
      


    </>
  )
}