//Libs
import React from 'react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import Headroom from 'react-headroom';

//Components
import Nav from './Nav.js';
import Projects from './Projects.js';
import Footer from './Footer.js';

//Assets
import fullThrottleBanner from '../assets/projects/full-throttle/FullThrottle_Site_Insitu_pdf-port_small_v1.jpg';
import fullThrottleWires from '../assets/projects/full-throttle/FullThrottle_Site_Wires_pdf_port_small_v1.jpg';
import fullThrottleWeb from '../assets/projects/full-throttle/FullThrottle_ProductPage_Flat.jpg';

const FullThrottle = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>
			<div className="container wide-container">
				<div id="ft-banner">
					<img src={fullThrottleBanner} />
				</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-8">
							<h4>Full Throttle</h4>
							<p>Full Throttle Energy Drink, introduced in 2004, was in desperate need of a website redesign. While this user-friendly site is clean it still embodies the tough and gritty aesthetic of the brand. This site is also fully responsive.</p>
							<p><a href="http://www.drinkfullthrottle.com/index.html">Check it out!</a></p>
						</div>
						<div className="col-xs-4">
							<h4>Skills</h4>
							<ul>
								<li>UX/UI</li>
								<li>Web Design</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8">
							<h4>Client</h4>
							<p>Full Throttle Energy Drink: The Coca-Cola Company</p>
						</div>
					</div>
				</div>
			</div>


				<div id="ft-banner">
					<img src={fullThrottleWires} />
				</div>


			<div className="project-info">
				<div className="container">
					<Reveal effect="animated fadeInLeft">
						<div className="row text-center">
							<h4>Core Features</h4>
						</div>
					</Reveal>

					<div className="row text-center">
						<Reveal effect="animated fadeInLeft">
							<div className="col-md-4">
								<div id="teachin-icons">
									<p>Manage Grades</p>
								</div>
							</div>
						</Reveal>
						<Reveal effect="animated fadeInRight">
							<div className="col-md-4">
								<div id="teachin-icons">
									<p>Organize Schedules</p>
								</div>
							</div>
						</Reveal>
						<Reveal effect="animated fadeInLeft">
							<div className="col-md-4">
								<div id="teachin-icons">
									<p>Share Rescources</p>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</div>

			<div id="ft-banner">
					<img src={fullThrottleWeb} />
				</div>

			<Projects />
			<Footer />
		</div>
	);
};

export default FullThrottle;