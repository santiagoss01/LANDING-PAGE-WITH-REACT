import React from "react";
import PropTypes from "prop-types";


const Jumbotron = (props) => {
	return (
		<div className="jumbotron m-5"id="jumboTron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-secondary btn-lg" href={props.buttonURL} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string,
};

export default Jumbotron;
// 	 <Jumbotron
// 	title="Welcome to react"
// 	description="React is the most popular rendering library in the world"
// buttonLabel="Go to the official website"
// 	buttonURL="https://reactjs.org/"
//  />
