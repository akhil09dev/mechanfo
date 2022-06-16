import React from "react";
import '../assets/styles/footer.css'

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer-main">
                <div>
                    <div className="footer-logo">
                        <img src="images/logo.png" alt="logo"/>
                        </div> 
                    <div className="footer-title">MECHANFO INTELLECT</div> 
                </div>
                <div>

                </div>
            </div>
            <hr/>
            <div className="footer-links">
                <div><ul>
                    <h3>QUICK LINKS</h3>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Services</li>
                    <li></li>
                    </ul></div>
                <div><h3>SOCIAL</h3></div>
                <div> <h3> OUR VENTURES</h3></div>
            </div>
        </footer>
    )
}
export default Footer