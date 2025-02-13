import React from "react";
import "./Contact.css"

const Contact = () => {
    return(
        <div className="Contact hidden">
            <p className="yellowText">So, what’s next? 😗</p>
            <h2>Get in touch</h2>
            <p className="ContactDetails">
                I am now looking for a software development role in <br/>
                a fast-paced software development team <br/>
                where I will have chances to learn new things and grow with the organization.
            </p>
            <p className="yellowText">If you are interested in my ability for your team,</p>
            <a href="https://www.linkedin.com/in/kaung-nay-lin-khant-3303021b2/" target="_blank" className="Btn">Message me on Linkedin</a>
            <a href="https://github.com/yatootay" target="_blank" className="link">Check my GitHub</a>
        </div>
    )
}

export default Contact