import portrait from '../assets/test.png'

export const Top = ()=>{

    return(
        <>
            <div className="container">
            <div
            className="row  justify-content-center align-items-center "
            style={{paddingTop:50}}
            >
            <div className="col-lg-5 col-12 ">
                <div className="box ">
                <div>
                    <img src={portrait} className="" style={{width:'100%'}}/>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-12 g d-flex justify-content-center ">
                <span className="box ">
                <div>
                    <h1
                    style={{
                        color: "#65856e",
                        fontSize: "47.3px",
                        paddingBottom: 10
                    }}
                    >
                    Leighton Miguel
                    </h1>
                    <p style={{ paddingBottom: 7 }}>
                    Information & Compter Science Student <br />
                    University of Hawaii at Manoa, Spring 2026
                    </p>
                    
                    
                    
                    
                    

                    
                        
                    
                </div>
                </span>
            </div>
            </div>
        </div>
        
        </>
    )
}