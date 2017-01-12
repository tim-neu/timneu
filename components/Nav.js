// Libs
import React from 'react';
import { Link, browserHistory } from 'react-router';

// Assets
import logo from '../assets/tn_logo_white_transparent.png'

const Nav = function(){
  return (
  	<div>
  		<nav id="navbar">
        <div className="row">
          <div className="col-md-12 content-container center">
            <ul>
              <Link to="/home"><img src={logo}/></Link>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/work">WORK</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
  			    </ul>
          </div>
        </div>
  		</nav>
  	</div>
  )
}

export default Nav;