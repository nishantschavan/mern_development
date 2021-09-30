import React from 'react'
import signupimg from "../Images/signin.svg";
import {NavLink} from 'react-router-dom'

const Signin = () => {
    return (
        <>
            <section className="signup">
                <div className="container">
                    <div className="header">
                        <h2>Sign up</h2>
                    </div>
                    <div className="form">
                        <div className="firsthalf">
                            <div className="text-icons">
                                <i class="fa fa-envelope"></i>
                                <input type="text" className="text_field" placeholder="Email"/>
                            </div>
                            <div className="text-icons">
                                <i class="fa fa-unlock-alt"></i>
                                <input type="text" className="text_field" placeholder="Password"/>
                            </div>

                            <button className="btn-clk">register</button>
                            <NavLink to="/signin" className="dir-link">Already have an account ?</NavLink>
                        </div>
                        <div className="secondhalf">
                            <img className="sign-img" src={signupimg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin
