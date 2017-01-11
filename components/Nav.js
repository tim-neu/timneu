// Libs
import React from 'react';
import { Link } from 'react-router';

// Assets
import logo from '../assets/tn_logo_white_transparent.png'

const Nav = function(){
  return (
  	<div>
  		<nav id="navbar">
        <div className="row">
          <div className="col-md-12 content-container center">
            <ul>
              <img src={logo}/>
              <li>ABOUT</li>
              <li>WORK</li>
              <li>CONTACT</li>
  			    </ul>
          </div>
        </div>
  		</nav>
  	</div>
  )
}

export default Nav;