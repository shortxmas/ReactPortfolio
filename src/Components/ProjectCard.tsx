


export function ProjectCard(props:any)
{   
   
    

    

    

    
    
   

    return(

        <>
            <div className="row justify-content-center">
                <div className=" col-lg-10 col-12">
                    <div className="card" style={{ marginTop: 50,width:'100%' }}>
                        <div className="card-body" >
                            <h2 className="card-title">
                                {props.name}
                            </h2>
                            <h5>{props.description}</h5>
                            <h5 className="card-subtitle mb-2">
                            {props.languages}

                            
                            </h5>
                            <h5 className="card-subtitle mb-2" style={{color:"grey"}}>{props.date}</h5>
                            
                    
                            <p>
                                
                                <button
                                className="btn btn-success"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={"#" + props.name[0]+ props.name[1]+ props.name[3]}
                                aria-expanded="false"
                                style={{backgroundColor:'#137a63'}}
                                >
                                More Info
                                </button>
                            </p>
                            <div className="collapse card-subtitle mb-2 "  id={""+props.name[0]+ props.name[1]+ props.name[3]}>
                                
                                {props.info}
                                
                            </div>



                        </div>
                
                    </div>
                </div>
            </div>

            
        
        
        </>
    )
}