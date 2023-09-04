import {Link} from "react-router-dom";

export function Resume(){
    document.title = "Resume"
    return(
        <div className="container" style={{ padding: 50, lineHeight: "1.5" }}>
        <div className="jumbotron">
            <h1>Resume</h1>
        </div>
        <br />
        <div>
            <div className="row gx-5 justify-content-center" style={{ paddingTop: 25 }}>
            <div className="col-lg-8 col-12 card">
                <div className="box ">
                <div className="py-3">
                    <h2>Leighton Miguel</h2>
                </div>
                <div>
                    <h3>Professional Summary</h3>
                    <p>
                    I am a highly motivated individual that thrives in fast-paced
                    environments and I am always looking for ways to improve my skills
                    and knowledge. My willingness to learn and ability to adapt
                    quickly to new situations gives me confidence in my ability to
                    contribute to any team.
                    </p>
                </div>
                <div>
                    <h3>Job Experience</h3>
                    <div>
                    <h5>Web Developer at Manoa Now, University of Hawaii at Manoa</h5>
                    <h6 style={{ color: "grey" }}>August 2023 - Present</h6>
                    <ul>
                        <li>
                        Collaborate with a team of web developers to develop and
                        implement innovative features and functionalities to the
                        organization's website and app
                        </li>
                        <li>
                        Work closely with other organization teams to translate visual
                        designs and media ideas into responsive and engaging web
                        interfaces
                        </li>
                    </ul>
                    </div>
                    <div>
                    <h5>Retail Sales Associate at Uniqlo, Hawaii</h5>
                    <h6 style={{ color: "grey" }}>May 2023 - August 2023</h6>
                    <ul>
                        <li>
                        Exhibit exceptional problem-solving abilities to address
                        customer inquiries or complaints
                        </li>
                        <li>
                        Foster a positive work environment through transparent
                        communication &amp; helpful feedback to colleagues
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    <h3>Education</h3>
                    <div>
                    <h5>
                        Bachelor of Information &amp; Computer Sciences, University of
                        Hawaii at Manoa, Honolulu
                    </h5>
                    <h6 style={{ color: "grey" }}>August 2022 - May 2026</h6>
                    <ul>
                        <li>
                        Intro to Computer Science 111 &amp; 211, Discrete Mathematics
                        141 , Calculus 241 &amp; 242
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    <h3>Projects</h3>
                    <p>
                    See <Link to="/projects"><a > projects</a></Link>
                    </p>
                </div>
                <div>
                    <h3>Skills</h3>
                    <p>
                    Java, HTML/CSS (Bootstrap 5), JavaScript (React, Vue.js), PhP, MySQL,
                    Git, Computer Literate, Adaptable, Fast Learner
                    </p>
                </div>
                <div>
                    <h3>Hobbies</h3>
                    <p>Programming, PC Building, Computer Games, Tennis</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )

}