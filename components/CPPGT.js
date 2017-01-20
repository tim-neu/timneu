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
import cppgtBanner from '../assets/projects/ccpgt/BEAT_CPPS-Got-Talent_Header.jpg';
import cppgtPoster from '../assets/projects/ccpgt/CPPGT_Poster_Mockup.png';
import cppgtBadge from '../assets/projects/ccpgt/cppgtBadge.png';
import cppgtTickets from '../assets/projects/ccpgt/cppgtTix.png';

const CPPGT = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>
			<div className="container wide-container">
				<div id="ft-banner">
					<img src={cppgtBanner} />
				</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-8">
							<h4>CPP's Got Talent</h4>
							<p>Poster and collateral design for a 1950's themed talent show located on the campus of Cal Poly Pomona. All proceeds went to a charity or cause of the winning performance's choice.</p>
						</div>
						<div className="col-xs-4">
							<h4>Skills</h4>
							<ul>
								<li>Branding</li>
								<li>Illustration</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8">
							<h4>Client</h4>
							<p>Cal Poly Pomona Associated Students Inc., BEAT</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-2">
					</div>
					<div className="col-md-8">
					<Reveal effect="animated fadeInUp">
						<div id="poster-img">
						<Reveal effect="animated fadeInUp">
							<img src={cppgtPoster} />
						</Reveal>
						</div>
					</Reveal>
					</div>
				</div>
			</div>

			<div className="row" id="gray-info"> 
				<div className="col-md-6 cosmic-img">
				<Reveal effect="animated fadeInUp">
					<div id="poster-img">
					<Reveal effect="animated fadeInUp">
						<img src={cppgtBadge} id="btn-img" />
					</Reveal>
					</div>
				</Reveal>
				</div>
				<div className="col-md-6 cosmic-img">
					<div>
						
					</div>
				</div>
			</div>
			<div className="row gray-bg"> 
				<div className="col-md-6 cosmic-img">
					<div>
						
					</div>
				</div>
				<div className="col-md-6 cosmic-img">
				<Reveal effect="animated fadeInUp">
					<div id="poster-img">
					<Reveal effect="animated fadeInUp">
						<img src={cppgtTickets} />
					</Reveal>
					</div>
				</Reveal>
				</div>
			</div>

			<Projects />
			<Footer />
		</div>
	);
};

export default CPPGT;