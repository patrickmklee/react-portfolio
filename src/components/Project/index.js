import React from 'react';
// import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
function Project(props) {
    // const { name, description } = currentCategory;
    return (
        <div>
            <h4>{`${capitalizeFirstLetter(props.projectName)}`}
            </h4>
        </div>
    );
  }

  export default Project;