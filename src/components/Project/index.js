import React from 'react';
// import PhotoList from '../PhotoList';
const Project = function( {name, displayName} ) {
    // const { name, description } = currentCategory;
    return (
        <div className="col-xs-12 col-md-4" >
        <div className="card bg-dark text-center mb-2 text-light">
                <div className="card-body">
                    <h4 classsName="card-title">
                        {displayName}
                    </h4>
                    <img className="card-img-bottom img-responsive" alt={`${name} thumbnail`} src={require(`../../assets/projects/${name}.png`).default} />
            </div>
        </div>
        </div>
    );
  }

  export default Project;