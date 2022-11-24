import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";



const Home = () => {
 return (<div>
  		  <Navbar title = 'Start Bootstrap' firstText='Home' secondtText='About' thirdText='Services' fourthText='Conctat'/>
          <Jumbotron title="Welcome to react" description="React is the most popular rendering library in the world" buttonLabel="Go to the official website" buttonURL="https://reactjs.org/"/>
	      <Cards/> 
	   </div>)
};

 export default Home;


