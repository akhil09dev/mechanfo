import React from "react";
import Typography from '@mui/material/Typography';
import '../assets/styles/hero.css'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const Hero = () => {

    return ( <div className="hero"  >
        
        
<div className="title-block">
  <Typography variant='h1' 
  >
       MECHANFO
     </Typography>
     <Typography variant='subtitle1' >
     Lorem ipsum dolor sit amet. Qui sint nihil ad fugiat debitis et amet sint! Ad tempore autem aut ipsum maiores non blanditiis vitae non eveniet dignissimos sed laborum excepturi.
     </Typography>
     <ButtonGroup

     size="large"
     >
         <Button
         color="success"
         variant="contained"
         >Contact US</Button>
         <Button
         variant="text"
         >Connect</Button>

     </ButtonGroup>
     </div>

   
    </div> );
}
 
export default Hero;