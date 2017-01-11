//Libs
import React, { Component } from 'react';

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
			<div>
				<div className="row">
					<div className="col-md-4" id="red">
						<img src={teachinThumb} id="thumb" />
					</div>
					<div className="col-md-4" id="blue">
						<img src={cosmicMaddnessThumb} id="thumb" />
					</div>
					<div className="col-md-4" id="green">
						<img src={fullThrottleThumb} id="thumb" />
					</div>
				</div>

				<div className="row">
					<div className="col-md-4" id="red">
						<img src={nosSweepsThumb} id="thumb" />
					</div>
					<div className="col-md-4" id="blue">
						<img src={wtniwThumb} id="thumb" />
					</div>
					<div className="col-md-4" id="green">
						<img src={painInTheGasThumb} id="thumb" />
					</div>
				</div>

				<div className="row">
					<div className="col-md-4" id="red">
						<img src={chambordThumb} id="thumb" />
					</div>
					<div className="col-md-4" id="blue">
						<img src={wslThumb} id="thumb" />
					</div>
					<div className="col-md-4" id="green">
						<img src={cppgtThumb} id="thumb" />
					</div>
				</div>
			</div>
		);
	}
};

export default Projects;