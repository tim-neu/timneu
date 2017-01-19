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
import wtniwBanner from '../assets/projects/nos-wtniw/WTNIW_Header_Image.jpg';
import firasLogo from '../assets/projects/nos-wtniw/Firas_Logo-2.jpg';
import firasShirt from '../assets/projects/nos-wtniw/T-Shirt-MockUp_Front_02.jpg';
import firasShirt2 from '../assets/projects/nos-wtniw/NOS_shot_6_00003-Edit.jpg';
import wtniwSocBanner1 from '../assets/projects/nos-wtniw/Mistress_NOS_With-This-NOS-I-Will_Social-DustYourselfOff.jpg';
import wtniwSocBanner2 from '../assets/projects/nos-wtniw/Mistress_NOS_With-This-NOS-I-Will_Social-GSP.jpg';

const WTNIW = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>
			<div className="container wide-container">
				<div id="ft-banner">
					<img src={wtniwBanner} />
				</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-8">
							<h4>With This NOS® I Will</h4>
							<p>With This NOS I Will is a large-scale campaign that spans across multiple platforms including, digital, social, print and more. With This NOS I Will inspires individuals to interact with the brand and show the world what they would do with a can of kick-ass.</p>
						</div>
						<div className="col-xs-4">
							<h4>Skills</h4>
							<ul>
								<li>Digital</li>
								<li>Social</li>
								<li>Print</li>
								<li>Branding</li>
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
			<div className="black-bg">
				<div className="container">
					<h4 className="white-header text-center">Digital</h4>
					<div className="row">
						<div className="col-md-3 wtniw-gif">
							<iframe src="//giphy.com/embed/26gstFju5YgjOImu4" width="228" height="190" frameBorder="0"></iframe>
						</div>
						<div className="col-md-3 wtniw-gif">
							<iframe src="//giphy.com/embed/l0Exd1HyiByzBZUNW" width="228" height="190" frameBorder="0"></iframe>
						</div>
						<div className="col-md-3 wtniw-gif">
							<iframe src="//giphy.com/embed/l0Ex0wzwEPiM4IzaE" width="228" height="190" frameBorder="0"></iframe>
						</div>
						<div className="col-md-3 wtniw-gif">
							<iframe src="//giphy.com/embed/l0ExvQEaJHlNOxt3q" width="228" height="190" frameBorder="0"></iframe>
						</div>
					</div>
				</div>
			</div>

			<div className="container section-space-1">
				<h4 className="text-center">#WTNIW</h4>
				<div className="row">
					<div className="section-space-1">
						<img id="wtniw-img" src={wtniwSocBanner1} />
					</div>
					<div className="section-space-1">
						<img id="wtniw-img" src={wtniwSocBanner2} />
					</div>
				</div>
			</div>

			<div className="container section-space-1">
				<h4 className="text-center">Athlete Branding</h4>
				<div className="row">
					<div className="section-space-1">
						<img id="wtniw-img" src={firasLogo} />
					</div>
					<div className="section-space-1">
						<img id="wtniw-img" src={firasShirt} />
					</div>
					<div className="section-space-1">
						<img id="wtniw-img" src={firasShirt2} />
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

			<div id="ft-banner">
			</div>
			<Projects />
			<Footer />
		</div>
	);
};

export default WTNIW;