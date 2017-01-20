//Libs
import React, { Component } from 'react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import Headroom from 'react-headroom';

//Components
import Nav from './Nav.js';
import Projects from './Projects.js';
import Footer from './Footer.js';

//Assets
import teachinBanner from '../assets/projects/teachin/teach-in-banner.jpg';
import desktop from '../assets/projects/teachin/teachin-desk-01.jpg';
import gradesIcon from '../assets/projects/teachin/teach-in-icon-set-03.jpg';
import scheduleIcon from '../assets/projects/teachin/teach-in-icon-set-02.jpg';
import rescourcesIcon from '../assets/projects/teachin/teach-in-icon-set-05.jpg';


class Teachin extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidUpdate() {
  	window.scrollTo(0,0);
	}

	render () {

	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>

			<div className="container wide-container">
					<div id="banner">
						<img src={teachinBanner} />
					</div>
			</div>

			<div className="project-info">
				<div className="container content-container">
					<div className="row">
						<div className="col-sm-8">
							<h4>Teach.in</h4>
							<p>Teach.in is an education management system that provides teachers and students with a platform to efficiently administrate and track daily class activities.</p>
							<p><a href="https://teachin.herokuapp.com/home">Check it out!</a></p>
						</div>
						<div className="col-xs-4">
							<h4>Technologies</h4>
							<ul>
								<li>Javascript</li>
								<li>React</li>
								<li>Redux</li>
								<li>Postgres</li>
								<li>Node.js</li>
								<li>Express</li>
							</ul>
						</div>
					</div>
				</div>
			</div>


				<div id="desktop-img">
					<img src={desktop} />
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
									<img src={gradesIcon} />
								</div>
							</div>
						</Reveal>
						<Reveal effect="animated fadeInRight">
							<div className="col-md-4">
								<div id="teachin-icons">
									<p>Organize Schedules</p>
									<img src={scheduleIcon} />
								</div>
							</div>
						</Reveal>
						<Reveal effect="animated fadeInLeft">
							<div className="col-md-4">
								<div id="teachin-icons">
									<p>Share Rescources</p>
									<img src={rescourcesIcon} />
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
}

export default Teachin;