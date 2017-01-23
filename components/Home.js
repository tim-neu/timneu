// Libs
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Reveal from 'react-reveal';
import 'animate.css/animate.css'; // CSS animation effects library
import Headroom from 'react-headroom';


// Components
import Nav from './Nav.js';
import Footer from './Footer.js';

// Assets
import teachin from '../assets/teachin.jpg';
import tn_logo_lg from '../assets/tn_logo.png';

var Home = React.createClass({
  render: function() {
    return (
      <div>
  			<Headroom disableInlineStyles>
  				<Nav />
  			</Headroom>
  			<div className="container home-container">
  				<div className="container content-container">
  					<div className="hero">
  						<div className="headline">
  							<ReactCSSTransitionGroup
  																transitionName="fade"
          												transitionEnterTimeout={700}
          												transitionLeaveTimeout={700}
  																transitionAppear={true}
      														transitionAppearTimeout={5000}>
  								<h1>TIM NEUMANN</h1>
  							</ReactCSSTransitionGroup>
  										<h4>Interactive Designer & Developer</h4>
  									</div>
  							<div className="row" id="hero">
  								<div className="col-xs-1 hero-line">
  								</div>
  							</div>
  							<div className="arrow bounce">
  							</div>
  						</div>
  					</div>
  				</div>
	
  			<div className="container section-space">
  				<div className="row">
  					<div className="col-md-12">
  						<div className="teachin">
  							<Reveal effect="animated fadeInLeft">
  								<h3 className="text-center">Latest Work</h3>
  								<Link to="teachin"><img src={teachin} /></Link>
  							</Reveal>
  						</div>
  					</div>
  				</div>
  			</div>
	
  			<div className="contact-container">
  				<div className="container content-container">
  					<Reveal effect="animated fadeInLeft">
  						<div className="row section-space-1">
  							<div className="col-md-12 contact">
  								<h1 className="">Let's chat!</h1>
  							</div>
  						</div>
  					</Reveal>
  					<div className="row section-space-2">
  						<Reveal effect="animated fadeInLeft">

  							<div className="col-md-12 contact xl-contact" id="xl-view">
  								<h3>If you’d like to work together on a project,<br/>message me at <a href="mailto:neu.timothee@gmail.com" className="email" id="text-underline">neu.timothee@gmail.com</a>.</h3>
  								<div className="row">
  									<div className="col-xs-1 xl-line">
  									</div>
  								</div>
  								<div className="row">
  									<div className="col-md-8 offset-lg-2 contact">
  										<ul>
  											<li className="hvr-underline-reveal"><a href="https://www.linkedin.com/in/timaneumann">Linked.in</a></li>
  											<li className="hvr-underline-reveal"><a href="https://github.com/tim-neu">GitHub</a></li>
  											<li className="hvr-underline-reveal"><a href="https://www.instagram.com/taneumann/">Instagram</a></li>
  										</ul>
  									</div>
  								</div>
  							</div>

  							<div className="col-md-12 contact lg-contact desktop-only xl-only" id="lg-view">
  								<h3>If you’d like to work together on a project,<br/>message me at <a href="mailto:neu.timothee@gmail.com" className="email" id="text-underline">neu.timothee@gmail.com</a>.</h3>
  								<div className="row">
  									<div className="col-xs-1 lg-line">
  									</div>
  								</div>
  								<div className="row">
  									<div className="col-md-8 offset-lg-2 contact">
  										<ul>
  											<li className="hvr-underline-reveal"><a href="https://www.linkedin.com/in/timaneumann">Linked.in</a></li>
  											<li className="hvr-underline-reveal"><a href="https://github.com/tim-neu">GitHub</a></li>
  											<li className="hvr-underline-reveal"><a href="https://www.instagram.com/taneumann/">Instagram</a></li>
  										</ul>
  									</div>
  								</div>
  							</div>

  							<div className="col-md-12 contact md-contact desktop-only xl-only" id="md-view">
  								<h3>If you’d like to work together on a project,<br/>message me at <a href="mailto:neu.timothee@gmail.com" className="email" id="text-underline">neu.timothee@gmail.com</a>.</h3>
  								<div className="row">
  									<div className="col-xs-1 md-line">
  									</div>
  								</div>
  								<div className="row">
  									<div className="col-md-8 offset-lg-2 md-contact">
  										<ul>
  											<li className="hvr-underline-reveal"><a href="https://www.linkedin.com/in/timaneumann">Linked.in</a></li>
  											<li className="hvr-underline-reveal"><a href="https://github.com/tim-neu">GitHub</a></li>
  											<li className="hvr-underline-reveal"><a href="https://www.instagram.com/taneumann/">Instagram</a></li>
  										</ul>
  									</div>
  								</div>
  							</div>

  							<div className="col-md-12 contact sm-contact desktop-only xl-only" id="sm-view">
  								<h3>If you’d like to work together on a project,<br/>message me at <a href="mailto:neu.timothee@gmail.com" className="email" id="text-underline">neu.timothee@gmail.com</a>.</h3>
  								<div className="row">
  									<div className="col-xs-1 sm-line">
  									</div>
  								</div>
  								<div className="row">
  									<div className="col-md-8 offset-lg-2 sm-contact">
  										<ul>
  											<li className="hvr-underline-reveal"><a href="https://www.linkedin.com/in/timaneumann">Linked.in</a></li>
  											<li className="hvr-underline-reveal"><a href="https://github.com/tim-neu">GitHub</a></li>
  											<li className="hvr-underline-reveal"><a href="https://www.instagram.com/taneumann/">Instagram</a></li>
  										</ul>
  									</div>
  								</div>
  							</div>
  						</Reveal>
  					</div>
  				</div>
  			</div>

  			<Footer />
  		</div>
    );
  }
});

export default Home;