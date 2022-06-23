import React from "react";
import Typography from '@mui/material/Typography';
import '../assets/styles/hero.css'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from "react-router-dom";

const theme = createTheme()
theme.typography.h3 = {
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
      fontSize: '3.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  };
theme.Button= {
    
  };
  
const Hero = () => {

    return ( <div className="hero" id="hero"  >
        <video
        className="hero-video"
        src="hero-video.mp4"
        autoPlay
        muted
        loop
        />
        <ThemeProvider theme={theme}>
<div className="title-block">
  <Typography variant='h3' 
  >
       MECHANFO <br/>
       INTELLECT
     </Typography>
     
     <Typography variant='subtitle1'
     sx={{
      margin:'10px',
     
     }} >
     At Mechanfo Intellect, we create a better world enriched with sophisticated technologies that are customized according to the future needs of the society.</Typography>
     {/* <ButtonGroup

     size="large"
     >
         <Button
         color="success"
         variant="contained"
         >Contact US</Button>
         <Button
         variant="text"
         >Connect</Button>

     </ButtonGroup> */}
     </div>
     </ThemeProvider>
   
    </div> );
}
 
export default Hero;