import React from 'react';
// import Link from 'react-dom'
// import PhotoList from '../PhotoList';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
// import {faGithub} from "@fortawesome/free-brands-svg-icons"
const Project = function( {name, displayName, github} ) {
    // const { name, description } = currentCategory;
    return (
        <div className="col-xs-12 col-md-4" >
        <div className="card bg-dark text-center mb-2 text-light">
                <div className="card-body">
                    <a target="_blank" href={github} className="card-title">
                        {displayName}
                    </a>
                    <img className="card-img-bottom img-responsive" alt={`${name} thumbnail`} src={require(`../../assets/projects/${name}.png`).default} />
            </div>
            
        </div>
        </div>
    );
  }

  export default Project;