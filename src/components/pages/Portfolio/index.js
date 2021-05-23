import React from 'react';
import Project from '../../Project';
import {formatDisplayName} from '../../../utils/helpers'


function Portfolio() {
    const projects = [
        {
            // displayprojectName:
            name:"note-taker",
            github:"https://github.com/patrickmklee/ExpressNotes",
            description: "PLACEHOLDER"
        },
        {
            name:"tech-blog",
            github:"https://github.com/patrickmklee/tech_blog",
            description: "PLACEHOLDER"
        },
        {
            name:"weather-dashboard",
            github:"https://github.com/patrickmklee/WeatherDashboard",
            description: "PLACEHOLDER"
        },
        {
            name:"pets-r-us",
            github:"https://github.com/patrickmklee/Pet-Adoption",
            description: "PLACEHOLDER"
        },
        {
            name:"wine-n-dine",
            github:"https://github.com/patrickmklee/Wine-N-Dine",
            description: "Search for food and drink recipes"
        },
        {
            name:"password-generator",
            github:"https://github.com/patrickmklee/Password-Generator",
            description: "Generates randomized password strings"
        }
    ];
    // const { name, description } = currentCategory;
    return (
        
            <section className="row">
            
            {projects.map( project => {
                return (
                    <Project
                    key={project.name}
                    name={project.name}
                    github={project.github}
                    displayName={formatDisplayName(project.name)}
                    />
                )
             })
            } 
            
            </section>
        
    );
  }

  export default Portfolio;
