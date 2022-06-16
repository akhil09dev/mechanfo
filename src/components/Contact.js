import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../assets/styles/contact.css'



const Contact = () => {
    const [mail,sendmail]= useState(false)
    return ( <div className="contact-section">
               <div className="contact-title"> <Typography variant="h4">Get in touch !</Typography>
                <Typography variant="para"> Got something for us , feel free to email or give us a call</Typography>
                </div> 
        <div className="contact-options">

            <Card>
     <CardMedia
     component="img"
     height="100"
     image='images/1.png'
     />  </Card>
            <Card>
            <CardMedia
            component="img"
             height="100"

     image='/images/10.png'
     />
            </Card>
            <Card>
            <CardMedia
            component="img"
              height="100"
     image='/images/9.png'
     />
            </Card>
        </div>

        <div className="contact-form">

        </div>
    </div> );
}
 
export default Contact;