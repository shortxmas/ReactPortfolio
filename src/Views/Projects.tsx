import befimg from '../assets/newp.png'
import caimg from '../assets/demo3.png'
import cgtimg from '../assets/cgt2.png'
import pwimg from '../assets/neweb.png'
import lbimg from '../assets/lbpic.png'

export function Projects(){

    document.title = "Projects"
    return(
        <>
        
        <div className="container" style={{ padding: 50 }}>
            <div className="jumbotron">
                <h1>Projects</h1>
            </div>
            <div className="card" style={{ marginTop: 50 }}>
                <div className="card-body">
                <h2 className="card-title">
                    <a href="https://backendform.com">backendform.com</a>
                </h2>
                <h5 className="card-subtitle mb-2">PhP, Bootstrap 5, MySQL</h5>
                <h5 className="card-subtitle mb-2">August 2023</h5>
                <h5 style={{ fontWeight: 400 }}>
                    <p>
                    backendform.com is a website allows users to setup a working contact
                    form without writing any backend code. They would simply send the form
                    information to this website and this website would email the form
                    submission information to their email. All they would need to do is
                    make their form and set its "action" attribute to this website and all
                    the backend code would be dealt with. I plan to use this website with
                    all of my already existing and future projects that has some sort of
                    contact form.
                    </p>
                </h5>
                <div className="card" style={{ marginTop: 50 }}>
                    <img
                    src={befimg}
                    className="img-fluid"
                    style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}
                    />
                </div>
                </div>
            </div>
            <div className="card" style={{ marginTop: 50 }}>
                <div className="card-body">
                <h2 className="card-title">
                    <a href="http://cardaudit.free.nf/">cardaudit.co</a>
                </h2>
                <h5 className="card-subtitle mb-2">PhP, MySQL</h5>
                <h5 className="card-subtitle mb-2">July 2023</h5>
                <h5 className="card-subtitle mb-2">
                    (WIP) Currently remaking in React with TypeScript, Bootstrap 5, Firebase
                </h5>
                <h5 style={{ fontWeight: 400 }}>
                    <p>
                    cardaudit.co is a credit card management website that holds your
                    transactions and debts. Originally, I had planned to make this a
                    website that manages your passwords and accounts information but
                    changed it to a credit card management website as I feel it would be
                    more useful to me personally. Using PhP, it interacts with a MySQL
                    databse that holds account information and card transactions. I plan
                    to eventually turn this into a mobile application so I can personally
                    use it on a day to day basis.
                    </p>
                </h5>
                <div className="card" style={{ marginTop: 50 }}>
                    <img
                    src={caimg}
                    className="img-fluid"
                    style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}
                    />
                </div>
                </div>
            </div>
            <div className="card" style={{ marginTop: 50 }}>
                <div className="card-body">
                <h2 className="card-title">
                    <a href="https://collegegradetool.com">collegradetool.com</a>
                </h2>
                <h5 className="card-subtitle mb-2">Vue.js, Bootstrap 5</h5>
                <h5 className="card-subtitle mb-2">July 2023, Remade in August 2023</h5>
                <h5 style={{ fontWeight: 400 }}>
                    <p>
                    collegegradetool.com is a website with grade tools that helps bring
                    academic awareness to students. The tools in this website include a
                    grade calculator with different weighted categories, semester and
                    cumulative GPA calculator and a calculator that shows users what grade
                    they would need on their final to get their desired inputted grade. As
                    I am also a college student, this website was inspired by my necessity
                    of knowing what my grades are at all times throughout the semester.
                    </p>
                </h5>
                <div className="card" style={{ marginTop: 50 }}>
                    <img
                    src={cgtimg}
                    className="img-fluid"
                    style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}
                    />
                </div>
                </div>
            </div>
            <div className="card" style={{ marginTop: 50 }}>
                <div className="card-body">
                <h2 className="card-title">Portfolio Website</h2>
                <h5 className="card-subtitle mb-2">Bootstrap 5</h5>
                <h5 className="card-subtitle mb-2">June 2023, Remade in August 2023</h5>
                <h5 style={{ fontWeight: 400 }}>
                    <p>
                    The first version of my portfolio website was my first project that
                    dipped into web development which was purely on the front end side. My
                    portfolio website serves as a one place holder of all of my
                    information as profesionals can get to know me, view my resume and
                    projects, and contact me. The version of my website that you are
                    seeing right now is my remade August 2023 version. This website will
                    be constantly updated as I create more projects and add experience to
                    my resume.
                    </p>
                </h5>
                <div className="card" style={{ marginTop: 50 }}>
                    <img
                    src={pwimg}
                    className="img-fluid"
                    style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}
                    />
                </div>
                </div>
            </div>
            <div className="card" style={{ marginTop: 50 }}>
                <div className="card-body">
                <h2 className="card-title">Lock Box</h2>
                <h5 className="card-subtitle mb-2">Java</h5>
                <h5 className="card-subtitle mb-2">May 2023</h5>
                <h5 style={{ fontWeight: 400 }}>
                    <p>
                    LockBox is a small and compact program that allows the user to
                    password protect and lock any folder of their wish. The program works
                    by changing Windows folder attributes and creating a hidden key within
                    the folder which will later be used to unlock that folder. Simply drop
                    the LockBox file into the same directory as the folder you want to
                    lock and follow the directions in the program.
                    </p>
                </h5>
                <div className="card" style={{ marginTop: 50 }}>
                    <img
                    src={lbimg}
                    className="img-fluid"
                    style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}
                    />
                </div>
                </div>
            </div>
            </div>
        </>

    )

}