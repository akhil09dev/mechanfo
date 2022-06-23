import React from "react";
import '../assets/styles/footer.css'

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="">
                <div>
                <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.747567608438!2d76.24137821462752!3d10.520537666741825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef53eaa300b5%3A0x6c8c3dd20ad9312a!2sMECHANFO%20INTELLECT%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1655957404141!5m2!1sen!2sin"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    {/* <div className="footer-logo">
                        <img src="images/logo.png" alt="logo"/>
                        </div>  */}
                </div>
            
            </div>
            
            <div className="footer-links">
                  
            <div className="ventures">
                     <h3> OUR VENTURES</h3>
                     <a href="https://incarco.com/" target='_blank'><img  className="venture-img" src="images/incarco.png"/></a>
                     </div>
                
               
                    <div className="social">
                <h3>SOCIAL</h3>
                <ul className="footer-social">
                
                    <li><a href="https://www.linkedin.com/company/incarco/" target='_blank'><img src="images/icons/linkedin.png"/></a></li>
                    <li><a href="https://instagram.com/incarcooff?igshid=YmMyMTA2M2Y=" target='_blank'><img src="images/icons/insta.png"/></a></li>
                    
                    <li><a href="https://www.youtube.com/channel/UCUU3b0BVgOZo9_TZewbD1IA" target='_blank'><img src="images/icons/youtube.png"/></a></li>
                    <li><a href="https://www.facebook.com/mechanfo/" target='_blank'><img src="images/icons/facebook.png"/></a></li>
                </ul>
                </div>
                <div><ul className="footer-nav">
                    <li className="link"><a href="#hero">Home</a></li>
                    <li className="link"><a href="#contact">Contact</a></li>
                    <li className="link"><a href="#services">Products</a></li>

                    </ul>
                    
                    </div>
                
              
            </div>
           
        </footer>
    )
}
export default Footer