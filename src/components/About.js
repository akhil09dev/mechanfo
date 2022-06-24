import React from "react";
import '../assets/styles/about.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Typography from "@mui/material/Typography";
const theme = createTheme()
theme.typography.h3 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.5rem',
    },
  };
theme.typography.para= {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '1.2rem',
      
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  };
const About = () => {
    return (  <div className="about" id="about">
        <div className="about-text">

        <ThemeProvider theme={theme}>
        <Typography variant="h3">
            ABOUT US 
        </Typography>
        <Typography variant="para">
        Mechanfo Intellect, a team of highly motivated engineers with aspiring skills in innovative automotive technologies under the leadership of Mr. Farhan and Mr. Salman. Incorporated in 2019, Mechanfo Intellect is one of the eminent and prompt technological company which provides services in various fields.</Typography>
        </ThemeProvider>
</div>
<div className="about-image">
<img src ='images/office.jpg'/>
</div>
      
    </div>);
}
 
export default About;