//Libs
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

// Assets
import teachinThumb from '../assets/projects/teachin/teach-in-thumb.jpg';
import cosmicMaddnessThumb from '../assets/projects/cosmic-maddness/BEAT_Cosmic-Madness_FALL13_thumbnail.jpg';
import fullThrottleThumb from '../assets/projects/full-throttle/FullThrottle_thumb.jpg';
import nosSweepsThumb from '../assets/projects/nos-sweeps/NOS_Sweeps_thumb.jpg';
import wtniwThumb from '../assets/projects/nos-wtniw/WTNIW_thumbnail.jpg';
import painInTheGasThumb from '../assets/projects/pain-in-the-gas/PainInTheGas_Thumb_02.jpg';
import chambordThumb from '../assets/projects/chambord/Chambord_Thumbnail_Image.jpg';
import wslThumb from '../assets/projects/wsl/WSL_Thumb.jpg';
import cppgtThumb from '../assets/projects/ccpgt/BEAT_CPPS-Got-Talent_thumb.jpg';

class Projects extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="container wide-container">
				<div className="row wide-container">
					<div className="col-sm-4" id="red">
						<Link to="teachin"><img src={teachinThumb} id="thumb" /></Link>
					</div>
					<div className="col-sm-4" id="blue">
						<Link to="cosmic-maddness"><img src={cosmicMaddnessThumb} id="thumb" /></Link>
					</div>
					<div className="col-sm-4" id="green">
						<Link to="full-throttle"><img src={fullThrottleThumb} id="thumb" /></Link>
					</div>
				</div>

				<div className="row wide-container">
					<div className="col-sm-4" id="red">
						<Link to="nos-sweeps"><img src={nosSweepsThumb} id="thumb" /></Link>
					</div>
					<div className="col-sm-4" id="blue">
						<Link to="wtniw"><img src={wtniwThumb} id="thumb" /></Link>
					</div>
					<div className="col-sm-4" id="green">
						<Link to="pitg"><img src={painInTheGasThumb} id="thumb" /></Link>
					</div>
				</div>

				<div className="row wide-container">
					<div className="col-sm-4" id="red">
						<Link to="chambord"><img src={chambordThumb} id="thumb" /></Link>
					</div>
					<div className="col-sm-4" id="blue">
						<Link to="wsl-pure"><img src={wslThumb} id="thumb" /></Link>
					</div>
					<div className="col-sm-4" id="green">
						<Link to="cppgt"><img src={cppgtThumb} id="thumb" /></Link>
					</div>
				</div>
			</div>
		);
	}
};

export default Projects;