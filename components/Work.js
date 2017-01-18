//Libs
import React from 'react';
import 'animate.css/animate.css'; // CSS animation effects library
import Headroom from 'react-headroom';

//Components
import Nav from './Nav.js';
import Projects from './Projects.js';
import Footer from './Footer.js';

const Work = function(){
	return (
		<div>
			<Headroom disableInlineStyles>
				<Nav />
			</Headroom>
			<Projects />
			<Footer />
		</div>
	);
};

export default Work;