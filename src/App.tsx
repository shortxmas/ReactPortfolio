import { Navbar } from "./Components/Navbar"
import { Footbar } from "./Components/Footbar"
import { AboutMe } from "./Components/AboutMe"
import { Top } from "./Components/Top"
import { Resume } from "./Components/Resume"
import { Projects } from "./Components/Projects"
import { Contact } from "./Components/Contact"




function App() {
  
  return (
    <>
    <div className="sticky-top">
    <Navbar/>
    </div>
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex={0}>
      
      <div id="top">
        <Top/>
      </div>
      <div id="aboutme">
        <AboutMe/>
      </div>
      <hr></hr>
      <div id="resume">
        <Resume/>
      </div>
      <hr></hr>
      <div id="projects">
        <Projects/>
      </div>
      <hr></hr>
      <div id="contact">
        <Contact/>
      </div>
      
      <Footbar/>
    </div>
   


    
    
    
   

    

      
      
      
        
      

    </>
  )
}

export default App
