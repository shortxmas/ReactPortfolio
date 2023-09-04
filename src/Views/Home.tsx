import { HomeButtons } from '../Components/HomeButtons'
import portrait from '../assets/test.png'
import { useState } from 'react'


export function Home(){
    document.title = "Home"
    const [info,showInfo] = useState('none')
    const [moreButton,changeMoreButton] = useState('')
    const [lessButton,changeLessButton] = useState('none')

    return(
        <>
        <div className="container">
            <div
            className="row  justify-content-center align-items-center"
            style={{ paddingTop: 75 }}
            >
            <div className="col-md-5 col-12 ">
                <div className="box ">
                <div>
                    <img src={portrait} className="img-fluid" />
                </div>
                </div>
            </div>
            <div className="col-md-4 col-12 g d-flex justify-content-center ">
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
                    <HomeButtons/>
                    
                    

                    
                        
                    
                </div>
                </span>
            </div>
            </div>
        </div>
        <div className="container" style={{ paddingTop: 100 }}>
            <div
            className="row justify-content-center"
            style={{ textAlign: "center", paddingTop: 50 }}
            >
            <div className="col-lg-8 col-12">
                <div className="box">
                <div
                    className="card-body text-bg-light p-3"
                    style={{ borderRadius: 20,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}

                >
                    <h2 className="card-title" style={{ color: '#137a63' }}>
                    About Me!
                    </h2>
                    <div style={{display:info}}>
                        <br />
                        <h5 style={{ color: '#2F4F4F',fontWeight:'400'}}>
                        <p id="aboutmep1">
                            Hello! My name is Leighton Miguel, I am currently 19 years old,
                            my favorite color is mint green, and I love technology! I am
                            from a homey and lush town called Mililani which is on the
                            island of Oahu and a part of the beautiful state of Hawaii. I
                            grew up playing tennis, traveling frequently, playing video
                            games and building computers. I have been
                            surrounded by computers and technology for all of my early life
                            as my dad built his own computers as a side hobby. My upbringing
                            in a loving family with a love for computers has fostered my
                            deep appreciation for them and shaped my desire to further my
                            skills in programming!
                        </p>
                        
                        
                        <p id="aboutmep2">
                            {" "}
                            My love for Hawaii as a home and as a place ultimately helped me
                            decide to attend the University of Hawaii at Manoa, and with my
                            love for technology and computers, it was a no brainer for me to
                            major in Computer Science. At the time of writing this, I am currently a sophomore and
                            anticipated to graduate in the Spring of
                            2026. I happily look forward to the adventures I know will
                            come my way!
                        </p>
                        </h5>
                    </div>
                    
                    <div className="pt-1">
                        <button type="button" className="btn btn-success " style={{backgroundColor:'#137a63',display:lessButton}}
                        onClick={() => {
                            showInfo('none');
                            changeMoreButton('');
                            changeLessButton('none');

                        }}>Collapse</button>
                    </div>

                    <div className="pt-1">
                        <button type="button" className="btn btn-success " style={{backgroundColor:'#137a63',display:moreButton}}
                        onClick={() =>{
                            showInfo('');
                            changeMoreButton('none');
                            changeLessButton('');
                        }}>Expand</button>
                    </div>


                </div>
                
                </div>
            </div>
            </div>
        </div>
        </>

        
    )

}