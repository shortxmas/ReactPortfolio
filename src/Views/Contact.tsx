export function Contact(){
    document.title = "Contact"
    return(
        <div className="container" style={{ padding: 50 }}>
            <div className="jumbotron">
                <h1> Contact</h1>
            </div>
            {/* <form action="https://backendform.com/sendform.php/leightonmiguelweb@gmail.com" method = "post" > */}
            <form
                action="https://backendform.com/sendform.php/leightonmiguelweb@gmail.com"
                method="get"
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
                <input type="hidden" name="fromwebsite" defaultValue="portolio website" />
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

    )

}