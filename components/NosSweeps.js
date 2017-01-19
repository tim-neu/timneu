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
import nosSweepsBanner from '../assets/projects/nos-sweeps/NOS_T3Sweeps_Header.jpg';
import nosSweepsWires from '../assets/projects/nos-sweeps/NOS_T3Sweeps_Wires.jpg';

const NosSweeps = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>
			<div className="container wide-container">
				<div id="ft-banner">
					<img src={nosSweepsBanner} />
				</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-8">
							<h4>Nos Sweepstakes</h4>
							<p>Sweepstakes entry form designed for both desktop and mobile site users.</p>
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
							<p>NOS® Energy Drink</p>
						</div>
					</div>
				</div>
			</div>

			<div id="ft-banner">
				<img src={nosSweepsWires} />
			</div>

			<Projects />
			<Footer />
		</div>
	);
};

export default NosSweeps;