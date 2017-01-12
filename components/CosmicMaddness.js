//Libs
import React from 'react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';

//Components
import Nav from './Nav.js';
import Projects from './Projects.js';
import Footer from './Footer.js';

//Assets
import cosmicMaddnessPoster from '../assets/projects/cosmic-maddness/CosmicMadness_Poster_Mockup.png';
import buttonsCloseUp from '../assets/projects/cosmic-maddness/CosmicMadness_Buttons_CloseUp.jpg';
import wheel from '../assets/projects/cosmic-maddness/CosmicMadness_Wheel.jpg';

const CosmicMaddness = function(){
	return (
		<div>
			<Nav />

			<div className="home-container">
				<div id="banner">
					<iframe src="https://player.vimeo.com/video/105575807" width="1100" height="619" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-8">
							<h4>Cosmic Maddness</h4>
							<p>Cosmic Madness is an exciting evening full of games, activities, music, and food that offers students a great opportunity to celebrate the end of the quarter before entering the stress of finals week.</p>
						</div>
						<div className="col-xs-4">
							<h4>Skills</h4>
							<ul>
								<li>Illustration</li>
								<li>Motion/Animation</li>
								<li>Digital</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8">
							<h4>Client</h4>
							<a href="http://asi.cpp.edu/student-government/bronco-events-activities-team/">Cal Poly Pomona Associated Students Inc., BEAT</a>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-2">
					</div>
					<div className="col-md-8">
						<div id="poster-img">
							<img src={cosmicMaddnessPoster} />
						</div>
					</div>
				</div>
			</div>

			<div className="row" id="gray-info"> 
				<div className="col-md-6 cosmic-img">
					<div id="poster-img">
						<img src={buttonsCloseUp} />
					</div>
				</div>
				<div className="col-md-6 cosmic-img">
					<div>
						
					</div>
				</div>
			</div>
			<div className="row" id="orange-info"> 
				<div className="col-md-6 cosmic-img">
					<div>
						
					</div>
				</div>
				<div className="col-md-6 cosmic-img">
					<div id="poster-img">
						<img src={wheel} />
					</div>
				</div>
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

			<Projects />
			<Footer />
		</div>
	);
};

export default CosmicMaddness;