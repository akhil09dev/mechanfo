import React from "react";
import Hero from "../components/Hero";
import Container from '@mui/material/Container';
import BasicTabs from "../components/Nav";
import Nav from "../components/Nav";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
const Home = () => {
    return ( <div>
<Nav/>
<Hero/>
<About/>
<Services/>
<Contact/>

</div> );
}
 
export default Home;