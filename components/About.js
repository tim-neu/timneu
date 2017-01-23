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

			<div className="container wide-container">
				<div id="ft-banner">
					<img src={timN} />
				</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-7">
							<h4>Hello!</h4>
							<p>I'm Tim! I'm from the Greater Los Angeles Area. At the moment, I'm hoping to transition into Software Engineering, ideally in the entertainment or technology industry.</p>
							<p>My latest accomplishment has been developing an education management system, Teach.in (currently in beta), provides teachers and students with a platform to efficiently administrate and track typical class activities. I worked on a team with two awesome engineers where we used a combination of React and Redux with a PostgresSQL database to manage all relational data. I also setup Webpack to bundle all modules. My primary focus on the front-end was to create and share events using React Big-Calendar. This feature involved developing an algorithm to convert data into the proper format for rendering. Check out the project on GitHub or at <a className="hvr-underline-reveal">https://teachin.herokuapp.com/</a></p>
							<p>I'm passionate about  learning new technologies, skills, and techniques. I studied design at California State Polytechnic University-Pomona. During my time at Cal Poly, I collected experience through numerous internships and later worked for the campus's marketing team.</p>
							<p>After receiving my B.F.A., I moved on to my next home at Mistress where I worked on larger projects for brands including NOS® Energy Drink, Chambord, the World Surf League, and more. Each campaign for these brands spanned across both print and digital platforms. In my free time, I enjoy good type, donuts, basketball, and finding my way through escape rooms (sometimes).</p>
						</div>
						<div className="col-xs-4">
							<h4>Services</h4>
							<ul>
								<li>Development</li>
								<li>UX/UI Design</li>
								<li>Animation</li>
								<li>Branding</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-7">
							<h4>If you want to collaborate on building an awesome product for people – you are very welcome to contact me.</h4>
							<p>
								<strong>Email: </strong>
								<a href="mailto:neu.timothee@gmail.com" className="about-email hvr-underline-reveal"> neu.timothee@gmail.com</a>
							</p>
							<p><strong>Mobile: </strong> 714-230-9130</p>
							<p><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/timaneumann" className="about-email hvr-underline-reveal"> @timaneumann</a></p>
							<p><strong>GitHub: </strong><a href="https://github.com/tim-neu" className="about-email hvr-underline-reveal"> @tim-neu</a></p>
						</div>
					</div>
				</div>
			</div>
			
			<Footer />
		</div>
	);
};

export default About;