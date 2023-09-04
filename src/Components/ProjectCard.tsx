import { useState } from "react"


export function ProjectCard(props:any)
{   
    const [info,showInfo] = useState('none')
    const [moreButton,changeMoreButton] = useState('')
    const [lessButton,changeLessButton] = useState('none')
    

    

    

    
    
   

    return(

        <>
            <div className="card" style={{ marginTop: 50 }}>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.name}
                    </h2>
                    <h5>{props.description}</h5>
                    <h5 className="card-subtitle mb-2">
                    {props.languages}

                    
                    </h5>
                    <h5 className="card-subtitle mb-2" style={{color:"grey"}}>{props.date}</h5>
                    <div style={{display:info}}>
                        
                        <h5 style={{ fontWeight: 400 }}>
                            <p>
                            {props.info}
                            </p>
                        </h5>
                        <div className="card" style={{ marginTop: 50 }}>
                            <img
                            src={props.image}
                            className="img-fluid"
                            style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}
                            />
                        </div>
                    </div>
                    
                    <div className="pt-3">
                        <button type="button" className="btn btn-success " style={{backgroundColor:'#137a63',display:moreButton}}
                        onClick={() =>{
                            showInfo('');
                            changeMoreButton('none');
                            changeLessButton('');
                        }}>Show more</button>
                    </div>

                    <div className="pt-3">
                        <button type="button" className="btn btn-success " style={{backgroundColor:'#137a63',display:lessButton}}
                        onClick={() => {
                            showInfo('none');
                            changeMoreButton('');
                            changeLessButton('none');

                        }}>Show less</button>
                    </div>

                </div>
                
            </div>
        
        
        </>
    )
}