import React from "react";
import '../assets/styles/services.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const theme = createTheme()
theme.typography.h3 = {
    fontSize: '2rem',
    textAlign :'centre',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.5rem',
    },
  };
const projects = [
    {
        name:'project1',
        link:'#0',
        img:'images/incarco.png',
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
    }
      
]


const Services = () => {


    return (  <div id="services" className="services-section">
<ThemeProvider theme ={theme}>
    <div className="title">
     <Typography variant="h3">
         OUR PRODUCTS
     </Typography>
     </div>
     <div className="services">
         <Grid container spacing={10}  >
         {projects.map((p)=>{
             return(
            <Grid item sm={6} xs={12} md={4}>
             <Card className="product-card">
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
</ThemeProvider>
    </div>);
}
 
export default Services;