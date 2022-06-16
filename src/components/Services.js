import React from "react";
import '../assets/styles/services.css'

import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const projects = [
    {
        name:'project1',
        link:'#0',
        img:'images/1.png',
        desc:'project by mechanfo pvt ltd'
    },{
        name:'project1',
        link:'#0',
        img:'images/2.png',
        desc:'project by mechanfo pvt ltd'
    },
    {
        name:'project1',
        link:'#0',
        img:'images/3.png',
        desc:'project by mechanfo pvt ltd'
    },
    {
        name:'project1',
        link:'#0',
        img:'images/6.png',
        desc:'project by mechanfo pvt ltd'
    },
    {
        name:'project1',
        link:'#0',
        img:'images/7.png',
        desc:'project by mechanfo pvt ltd'
    },
    {
        name:'project1',
        link:'#0',
        img:'images/4.png',
        desc:'project by mechanfo pvt ltd'
    },
    {
        name:'project1',
        link:'#0',
        img:'images/5.png',
        desc:'project by mechanfo pvt ltd'
    }
      
]


const Services = () => {


    return (  <div>
     <Typography variant="h3">
         OUR SERVICES
     </Typography>

     <div className="services">
         <Grid container spacing={4}  >
         {projects.map((p)=>{
             return(
            <Grid item sm={6} xs={12} md={4}>
             <Card>
         <CardMedia
           component="img"
           height="250"
           image={p.img}
           alt="project"
         />
         
             </Card>
             </Grid>)
         })}

</Grid></div>

    </div>);
}
 
export default Services;