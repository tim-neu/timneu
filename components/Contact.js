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
import timN from '../assets/TimN-2.jpg';

const About = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-7">
							<h4>Hello!</h4>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-7">
							<h4>If you want to collaborate on building an awesome product for people – you are very welcome to contact me.</h4>
						</div>
					</div>
				</div>
			</div>
			
			<Footer />
		</div>
	);
};

export default About;