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
import wslBanner from '../assets/projects/wsl/WSL_Header_Image_02.jpg';
import wslElements from '../assets/projects/wsl/WSL_PURE_Elements.jpg';
import wslWebsite from '../assets/projects/wsl/WSL_PURE_Website.jpg';
import wslWebsiteLg from '../assets/projects/wsl/WSP_PURE_MicroSite-01.jpg';
import wslShirt from '../assets/projects/wsl/PURE_T-Shirt-04.jpg';

const WSL = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>
			<div className="container wide-container">
				<div id="ft-banner">
					<img src={wslBanner} />
				</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-8">
							<h4>World Surf League: P.U.R.E.</h4>
							<p>The World Surf League and Columbia University joined forces to create Progressive Understanding and Respect for the Environment. P.U.R.E. is a program created to monitor climate change and the potential effects it has on our planet and for our oceans.</p>
						</div>
						<div className="col-xs-4">
							<h4>Skills</h4>
							<ul>
								<li>Branding</li>
								<li>Logo Design</li>
								<li>Web Design</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8">
							<h4>Client</h4>
							<p>World Surf League</p>
						</div>
					</div>
				</div>
			</div>

			<div className="elements-info">
				<div className="container wide-container">
					<div className="container content-container">
						<div id="wsl-elements">
							<Reveal effect="animated fadeInUp">
								<img src={wslElements} />
								<p>The design goal for this project was to give P.U.R.E. a visual identity that helps tie it back into the WSL. To accomplish this I took elements from the old logo such as the wave, the uniform stroke width, and icon style and combined it with a new forward-facing wave and a symbol of the ocean's most majestic creature.</p>
							</Reveal>
						</div>
					</div>
				</div>
			</div>

			<div className="container section-space-1">
				<div className="row">
					<div className="section-space-1">
						<Reveal effect="animated fadeInUp">
							<img id="wtniw-img" src={wslWebsite} />
						</Reveal>
					</div>
					<div className="section-space-1">
						<Reveal effect="animated fadeInUp">
							<img id="wtniw-img" src={wslWebsiteLg} />
						</Reveal>
					</div>
					<div className="section-space-1">
						<Reveal effect="animated fadeInUp">
							<img id="wtniw-img" src={wslShirt} />
						</Reveal>
					</div>
				</div>
			</div>

			<Projects />
			<Footer />
		</div>
	);
};

export default WSL;