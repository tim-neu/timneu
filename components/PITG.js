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
import pitgBanner from '../assets/projects/pain-in-the-gas/PainInTheGas_Header.jpg';
import pitgPoster from '../assets/projects/pain-in-the-gas/PainInTheGas_Poster.png';
import pitgIcons from '../assets/projects/pain-in-the-gas/PainInTheGas_Icons.jpg';
import pitgPoster2 from '../assets/projects/pain-in-the-gas/pitg3.jpg';

const PITG = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>
			<div className="container wide-container">
				<div id="ft-banner">
					<img src={pitgBanner} />
				</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-8">
							<h4>Pain In The Gas</h4>
							<p>This self-study infographic poster illustrates some eye-opening facts that are often overlooked when it comes to filling up our gas tanks. The Pain in the Gas project takes naturally dull information and visually communicates it in a more interesting way.</p>
						</div>
						<div className="col-xs-4">
							<h4>Skills</h4>
							<ul>
								<li>Data Visualization</li>
								<li>Infographic</li>
								<li>Icon Design</li>
								<li>Animation</li>
							</ul>
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
						<Reveal effect="animated fadeInUp">
							<img src={pitgPoster} />
						</Reveal>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="section-space-1">
						<h4 className="text-center">Icons</h4>
						<Reveal effect="animated fadeInUp">
							<img id="wtniw-img" src={pitgIcons} />
						</Reveal>
					</div>
				</div>
			</div>

			<div className="gray-bg">
				<div className="container">
					<h4 className="text-center">Digital</h4>
						<div className="pitg-gif">
						<Reveal effect="animated fadeInUp">
							<iframe src="//giphy.com/embed/d1E2a57GoyOCmlbi" width="400" height="254" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
						</Reveal>
						</div>
						<div className="pitg-gif">
						<Reveal effect="animated fadeInUp">
							<iframe src="//giphy.com/embed/l0Exn1Im46dlDt5Is" width="400" height="254" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
						</Reveal>
						</div>
						<div className="pitg-gif">
						<Reveal effect="animated fadeInUp">
							<iframe src="//giphy.com/embed/l0ExfST5J6II9PT2M" width="400" height="254" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
						</Reveal>
						</div>
						<div className="pitg-gif">
						<Reveal effect="animated fadeInUp">
							<iframe src="//giphy.com/embed/l0ExbcHrsBMQ3OBZ6" width="400" height="254" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
						</Reveal>
						</div>
						<div className="pitg-gif">
						<Reveal effect="animated fadeInUp">
							<iframe src="//giphy.com/embed/26gsosMCT8qkwkNws" width="400" height="254" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
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

export default PITG;