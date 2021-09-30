import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="contact-section">
                <div className="row">
                    <div className="contact-col">
                        <h4><i class="fa fa-phone"></i>  Phone</h4>
                        <p>+91 45112356</p>
                    </div>
                    <div className="contact-col">
                        <h4><i class="fa fa-envelope"></i> Email</h4>
                        <p>test@gmail.com</p>
                    </div>
                    <div className="contact-col">
                        <h4><i class="fa fa-briefcase"></i>  Work</h4>
                        <p>Software developer</p>
                    </div>
                </div>

                <div className="contact-field">
                    <div className="header">
                        <h1>Contact us</h1>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Phone" />
                    </div>
                    <div className="text-area">
                        <textarea name="" id="" cols="50" rows="10" placeholder="Enter your message"></textarea>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
