import React from "react";

import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";



const Home = () => {
 return (<div>
  		  <Navbar/>
		  <br/>
		  <br/>
          <Jumbotron title="Cinema picks of the week! " description="In this page you will find out everything there is to know about the latest deliveries of author-cinema films around the world, find quality cinematic experiences right here and now." buttonLabel="Write a review" buttonURL="https://www.imdb.com/"/>
		  <br/>
	      <Cards/> 
		  <Footer/>
		 
		  
	   </div>)
};

 export default Home;


