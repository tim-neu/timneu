//Libs
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

// Components
import App from './index.js';
import Home from './components/Home.js';
import Work from './components/Work.js';
import Teachin from './components/Teachin.js';
import CosmicMaddness from './components/CosmicMaddness.js';
import FullThrottle from './components/FullThrottle.js';
import NosSweeps from './components/NosSweeps.js';
import WTNIW from './components/WTNIW.js';
import PITG from './components/PITG.js';
import Chambord from './components/Chambord.js';
import WSL from './components/WSL.js';
import CPPGT from './components/CPPGT.js';

// Temp for testing
import Projects from './components/Projects.js'

// Routes
const routes = (
	<Route path="/" component={App}>
	<IndexRedirect to="/home" />
	  <Route path="home" component={Home} />
	  <Route path="projects" component={Projects} />
	  <Route path="work" component={Work} />
	  	<Route path="teachin" component={Teachin} />
	  	<Route path="cosmic-maddness" component={CosmicMaddness} />
	  	<Route path="full-throttle" component={FullThrottle} />
	  	<Route path="nos-sweeps" component={NosSweeps} />
	  	<Route path="wtniw" component={WTNIW} />
	  	<Route path="pitg" component={PITG} />
	  	<Route path="chambord" component={Chambord} />
	  	<Route path="wsl-pure" component={WSL} />
	  	<Route path="cppgt" component={CPPGT} />
	</Route>
);

export default routes;