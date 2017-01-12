//Libs
import React from 'react';

// Assets
import tn_logo_lg from '../assets/tn_logo.png';

const Footer = function(){
  return (
    <div className="footer-container">
      <div className="container content-container">
        <div className="row section-space">
          <div className="col-md-4">
            <div className="footer-logo">
              <img src={tn_logo_lg}/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer">
              <h3 className=""></h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer">
              <h3 className=""></h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 copyright-info">
            <p>© 2017 Tim Neumann / Interactive Designer / Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
