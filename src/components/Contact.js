import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import '../assets/styles/contact.css'
import ContactForm from "./partialls/ContactForm";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardHeader } from "@mui/material";
import ContactCard from "./partialls/ContactCard";


const theme = createTheme()
theme.typography.h3 = {
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.5rem',
    }
  };
theme.typography.para = {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    }
  };

  const ContactData=[
    {
      name:"name1",
      des:"designation1",
      email:"email@mechanfo.com"
    },
    {
      name:"name2",
      des:"designation2",
      email:"email@mechanfo.com"
    },
    {
      name:"name3",
      des:"designation3",
      email:"email@mechanfo.com"
    }
  ]

  const ContactCards= ContactData.map((p)=>{
    return(<div className="card">
      <ContactCard name={p.name} des={p.des} mail={p.email}/>
      </div>
    )
  })

const Contact = () => {
    const [mail,sendmail]= useState(false)
    return ( <div className="contact" id="contact">
        
               <div className="contact-title">
              <ThemeProvider theme={theme}>
                 <Typography variant="h3">Get in touch !</Typography>
                <Typography variant="para"> Got something for us , <br/>feel free to email or give us a call</Typography>
                </ThemeProvider>

                
                </div>
                {/* <div className="contact-cards">
                  {ContactCards}
                  </div>  */}

                <div className="contact-section">

        <div className= "contact-form">
            <Typography variant="h3">Contact Us</Typography>
            <ContactForm/>
        </div>
        </div>
        
    </div> );
}
 
export default Contact;