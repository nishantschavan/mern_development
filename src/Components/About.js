import React from 'react'
import userprofile from "../Images/user3.jpg";

const About = () => {
    return (
        <>
            {/* <section className="About">
                <div className="container">
                    <div className="about-div">
                        <div className="about-col">
                            <img src={userprofile} alt="" />
                        </div>
                        <div className="about-col">

                        </div>
                    </div>
                </div>
            </section> */}

            <div className="container emp-profile">
                <form action="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={userprofile} alt="" />
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>nishant chavan</h5>
                                <h6>web developer</h6>
                                <p className="profile-rating mt-3 mb-5">RANKING: <span>1/10</span></p>

                                <ul className="nav nav-tabs" role="tabllist">
                                    <li className="nav-items">
                                        <a href="#home" className="nav-link active" id="home-tab" data-toggle="tab" role="tab" >About</a>
                                    </li>
                                    <li className="nav-items">
                                        <a href="#profile" className="nav-link active" data-toggle="tab" role="tab">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About
