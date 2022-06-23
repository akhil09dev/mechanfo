import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import '../assets/styles/contact.css'
import ContactForm from "./partialls/ContactForm";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme()
theme.typography.h3 = {
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
      fontSize: '3.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    }
  };
theme.typography.para = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    }
  };


const Contact = () => {
    const [mail,sendmail]= useState(false)
    return ( <div className="contact" id="contact">
        
               <div className="contact-title">
              <ThemeProvider theme={theme}>
                 <Typography variant="h3">Get in touch !</Typography>
                <Typography variant="para"> Got something for us , <br/>feel free to email or give us a call</Typography>
                </ThemeProvider>

                
                </div> 
                <div className="contact-section">
        <div className= "contact-form">
            <Typography variant="h3">Contact Us</Typography>
            <ContactForm/>
        </div>
        </div>
        
    </div> );
}
 
export default Contact;