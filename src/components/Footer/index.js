import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';

// import {  } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <footer className="container-fluid bg-dark text-center my-0">
            <div className="d-inline-block mr-2">

            <a target="_blank" rel="noreferrer noopener" href="https://github.com/patrickmklee" className="nav-link"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            </div>
            <div className="d-inline-block">
            <a target="_blank" rel="noreferrer noopener" href="https://linkedin.com" >  <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            </div>
        </footer>
    );
}

export default Footer;