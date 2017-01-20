// Libs
import React from "react";
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

// Components
import App from './index.js';
import routes from './routes';

// Render
render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    {routes}
  </Router>
), document.getElementById('root'));