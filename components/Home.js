// Libs
import React from 'react';
import { Link } from 'react-router';

// Components
import Nav from './Nav.js';

// Assets
import teachin from '../assets/teachin.jpg'

const Home = function(){
  return (
  	<div>
  		<div className="container home-container">
  			<div className="container">
  				<div className="hero">
  					<Nav />
  					<div className="headline">
  						<h1>TIM NEUMANN</h1>
  						<h4>Interactive Designer & Developer</h4>
  					</div>
  					<div className="row">
  						<div className="col-xs-1 line">
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>

  		<div className="container">
  			<div className="row">
  				<div className="col-md-12">
  					<div className="teachin">
  						<h3 className="text-center">Latest</h3>
  						<img src={teachin} />
  						<h3>Teach.in</h3>
  					</div>
  				</div>
  			</div>
  		</div>

  		<div className="container">
  			<div className="row">
  				<div className="col-md-12">
  					<div className="teachin">
  						<h3 className="text-center">Let's Chat!</h3>
  					</div>
  				</div>
  			</div>
  		</div>

  	</div>
  )
}

export default Home;