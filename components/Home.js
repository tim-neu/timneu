// Libs
import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import sr from './scrollReveal.js';

// Components
import Nav from './Nav.js';

// Assets
import teachin from '../assets/teachin.jpg';
import tn_logo_lg from '../assets/tn_logo.png';

var Home = React.createClass({
  getInitialState: function() {
    return { mounted: false };
  },
  componentDidMount: function() {
    this.setState({ mounted: true });

    const config1 = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
      reset: true,
      viewFactor: 0.2,
      visibility: 'hidden'
    }

    sr.reveal('.teachin', config1)
  },
  render: function() {
    var name = this.state.mounted ?
      <h1>TIM NEUMANN</h1>
      :
      null;

    var title = this.state.mounted ?
      <h4>Interactive Designer & Developer</h4>
      :
      null;

    return (
      <div>
  			<div className="container home-container">
  				<div className="container content-container">
  					<div className="hero">
  						<Nav />
  						<div className="headline">
  							<ReactCSSTransitionGroup
  							transitionName="fade"
          			transitionEnterTimeout={700}
          			transitionLeaveTimeout={700}>
  							{name}
  							{title}
  							</ReactCSSTransitionGroup>
  						</div>
  						<div className="row" id="hero">
  							<div className="col-xs-1 hero-line">
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
	
  			<div className="container section-space">
  				<div className="row">
  					<div className="col-md-12">
  						<div className="teachin">
  							<h3 className="text-center">Latest Work</h3>
  							<img src={teachin} />
  						</div>
  					</div>
  				</div>
  			</div>
	
  			<div className="contact-container">
  				<div className="container content-container">
  					<div className="row section-space">
  						<div className="col-md-12 contact">
  							<h1 className="">Let's chat!</h1>
  						</div>
  					</div>
  					<div className="row section-space">
  						<div className="col-md-12 contact">
  							<h3>If you’d like to work together on a project,<br/>message me at <span id="text-underline">neu.timothee@gmail.com</span>.</h3>
  							<div className="row">
  								<div className="col-xs-1 line">
  								</div>
  							</div>
  							<div className="row">
  								<div className="col-md-8 offset-lg-2 contact">
  									<ul>
  										<li>Linked.in</li>
  										<li>GitHub</li>
  										<li>Instagram</li>
  									</ul>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
	
  			<div className="footer-container">
  				<div className="container content-container">
  					<div className="row section-space">
  						<div className="col-md-4">
  							<div className="footer-logo">
  								<img src={tn_logo_lg}/>
  							</div>
  						</div>
  						<div className="col-md-4">
  							<div className="footer">
  								<h3 className=""></h3>
  							</div>
  						</div>
  						<div className="col-md-4">
  							<div className="footer">
  								<h3 className=""></h3>
  							</div>
  						</div>
  					</div>
  					<div className="row">
  						<div className="col-md-12 copyright-info">
  							<p>© 2017 Tim Neumann / Interactive Designer / Developer</p>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
    );
  }
});

export default Home;