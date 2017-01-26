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
import chambordBanner from '../assets/projects/chambord/Chambord_Header_Image.jpg';
import chambord1 from '../assets/projects/chambord/chambord1.jpg';
import chambord2 from '../assets/projects/chambord/chambord2.png';
import chambord3 from '../assets/projects/chambord/chambord3.png';
import chambord4 from '../assets/projects/chambord/chambord4.png';
import chambord5 from '../assets/projects/chambord/chambord5.jpg';
import chambord6 from '../assets/projects/chambord/chambord6.jpg';
import chambord7 from '../assets/projects/chambord/chambord7.jpg';
import chambord8 from '../assets/projects/chambord/chambord8.png';
import chambord9 from '../assets/projects/chambord/chambord9.png';


const Chambord = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>
			<div className="container wide-container">
				<div id="ft-banner">
					<img src={chambordBanner} />
				</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-8">
							<h4>Chambord: Because No Reason</h4>
							<p>Chambord®, a premium black raspberry liqueur, and the quirky #BecauseNoReason campaign encourages its audience to do what they want, how they want, when they want to do it. Between its wacky compositions of "odd luxury" items and witty lines, Chambord® is sure to keep you both entertained and on your toes.</p>
						</div>
						<div className="col-xs-4">
							<h4>Skills</h4>
							<ul>
								<li>Photo Manipulation</li>
								<li>Animation</li>
								<li>Social</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8">
							<h4>Client</h4>
							<p>Chambord®</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row wide-container-2">
					<div className="col-sm-4" id="gallery-img">
					<Reveal effect="animated fadeInUp">
						<img src={chambord1} id="chambord-post" />
					</Reveal>
					</div>
					<div className="col-sm-4" id="gallery-img">
					<Reveal effect="animated fadeInUp">
						<img src={chambord2} id="chambord-post" />
					</Reveal>
					</div>
					<div className="col-sm-4" id="gallery-img">
					<Reveal effect="animated fadeInUp">
						<img src={chambord3} id="chambord-post" />
					</Reveal>
					</div>
				</div>

				<div className="row wide-container-2">
					<div className="col-sm-4" id="gallery-img">
					<Reveal effect="animated fadeInUp">
						<img src={chambord4} id="chambord-post" />
					</Reveal>
					</div>
					<div className="col-sm-4" id="gallery-img">
					<Reveal effect="animated fadeInUp">
						<img src={chambord5} id="chambord-post" />
					</Reveal>
					</div>
					<div className="col-sm-4" id="gallery-img">
					<Reveal effect="animated fadeInUp">
						<img src={chambord6} id="chambord-post" />
					</Reveal>
					</div>
				</div>

				<div className="row wide-container-2">
					<div className="col-sm-4" id="gallery-img">
					<Reveal effect="animated fadeInUp">
						<img src={chambord7} id="chambord-post" />
					</Reveal>
					</div>
					<div className="col-sm-4" id="gallery-img">
					<Reveal effect="animated fadeInUp">
						<img src={chambord8} id="chambord-post" />
					</Reveal>
					</div>
					<div className="col-sm-4" id="gallery-img">
					<Reveal effect="animated fadeInUp">
						<img src={chambord9} id="chambord-post" />
					</Reveal>
					</div>
				</div>
			</div>

			<div className="gray-bg section-padding-1">
				<div className="container">
					<div className="container home-container">
  						<div className="container content-container">
  							<div className="chambord-vid">
							<Reveal effect="animated fadeInUp">
								<iframe src="https://player.vimeo.com/video/149361602" width="520" height="520" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
							</Reveal>
							</div>
							<div className="chambord-vid">
							<Reveal effect="animated fadeInUp">
								<iframe src="https://player.vimeo.com/video/149363250" width="520" height="520" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
							</Reveal>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Projects />
			<Footer />
		</div>
	);
};

export default Chambord;