export const Contact = () =>{
    return(


        <>
            <div style={{paddingTop:100,paddingBottom:100}}>
            <h1 style={{textAlign:"center"}}>Contact</h1>
           <div className="d-flex justify-content-center" >
                
                    
                <div className="col-lg-5 col-11  " >
                    

                <form
                action="https://api.backendform.com/sendform/leightonmiguelweb@gmail.com"
                method="post"
            >
                <label htmlFor="name" className="form-label">
                Name
                </label>
                <input type="text" name="name" id="name" className="form-control" />
                <label htmlFor="email" className="form-label">
                Email
                </label>
                <input type="email" name="email" id="email" className="form-control" />
                <label htmlFor="message" className="form-label">
                Message
                </label>
                <input type="text" name="message" id="message" className="form-control" />
                {/* <button type=submit class="btn btn-primary mb-2" style= "margin-top: 15px; padding: 5px;">Submit</button> */}
                <button
                type="submit"
                className="btn btn-success "
                style={{ marginTop: 15, padding: 5, backgroundColor:'#137a63'}}
                >
                Submit
                </button>
                <input type="hidden" name="from" defaultValue="Portolio website" />
                <input
                name="redirect"
                defaultValue="https://leightonmiguel.com"
                style={{ display: "none" }}
                />
            </form>
            <div style={{ marginTop: 10 }}>
                This form uses my website{" "}
                <a href="https://backendform.com">backendform.com</a> for all form
                submissions.
            </div>

                    
                </div>
   
           </div>

            </div>

        </>
    )
}