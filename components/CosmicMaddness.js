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
import cosmicMaddnessPoster from '../assets/projects/cosmic-maddness/CosmicMadness_Poster_Mockup.png';
import wheel from '../assets/projects/cosmic-maddness/CosmicMadness_Wheel.jpg';
import cmBtn1 from '../assets/projects/cosmic-maddness/CosmicMadness_Buttons_CloseUp.jpg';
import cmBtn2 from '../assets/projects/cosmic-maddness/BEAT_Cosmic-Madness_FALL13_Buttons-01.png';
import cmBtn3 from '../assets/projects/cosmic-maddness/BEAT_Cosmic-Madness_FALL13_Buttons-02.png';
import cmBtn4 from '../assets/projects/cosmic-maddness/BEAT_Cosmic-Madness_FALL13_Buttons-03.png';
import cmBtn5 from '../assets/projects/cosmic-maddness/BEAT_Cosmic-Madness_FALL13_Buttons-04.png';
import cmBtn6 from '../assets/projects/cosmic-maddness/BEAT_Cosmic-Madness_FALL13_Buttons-05.png';

const CosmicMaddness = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>

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
					<Reveal effect="animated fadeInUp">
						<div id="poster-img">
							<img src={cosmicMaddnessPoster} />
						</div>
					</Reveal>
					</div>
				</div>
			</div>

			<div className="row" id="gray-info">
				<div className="col-md-6 cosmic-img">
				<Reveal effect="animated fadeInUp"> 
					<div id="poster-img">
						<img src={cmBtn1} id="btn-img" />
					</div>
				</Reveal>
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
				<Reveal effect="animated fadeInUp">
					<div id="poster-img">
						<img src={wheel} />
					</div>
				</Reveal>
				</div>
			</div>

			<div className="project-info">
				<div className="container">
					<Reveal effect="animated fadeInLeft">
						<div className="row text-center">
							<h4>Digital</h4>
						</div>
					</Reveal>

					<div className="row text-center">
						<Reveal effect="animated fadeInLeft">
							<div className="col-md-12 banner-gif">
								<img src={"https://static1.squarespace.com/static/534ad1b8e4b06a4afe15562c/t/5600e94be4b07aebe017e8e6/1442900345010/?format=1500w"} />
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