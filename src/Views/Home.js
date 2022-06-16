import React from "react";
import Hero from "../components/Hero";
import Container from '@mui/material/Container';
import BasicTabs from "../components/Nav";
import Nav from "../components/Nav";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Layout from "../components/layouts/Layout";
const Home = () => {
    return ( <div>
<Layout>
    <Hero/>
    <About/>
    <Contact/>
</Layout>

</div> );
}
 
export default Home;