import { Home } from "../Views/Home";
import { Contact } from "../Views/Contact";
import { Projects } from "../Views/Projects";
import { Resume } from "../Views/Resume";
import { Routes, Route} from "react-router-dom";

export function RouterLinks()
{
    return(

        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/projects" element={<Projects/>}/>
                

                
            </Routes>
        
        
        </>
    )
}