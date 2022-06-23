import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Layout from "../components/layouts/Layout";


const Home = () => {
    return ( <div>
<Layout>

				<Hero/>
                <br/>
                <About/>
                <br/>

                <Services/>
                <br/>

                <Contact/>
                <br/>

		
</Layout>

</div> );
}
 
export default Home;