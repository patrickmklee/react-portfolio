import React from 'react';
import Project from '../../Project';
import {formatDisplayName} from '../../../utils/helpers'


function Portfolio() {
    const projects = [
        {
            // displayprojectName:
            name:"note-taker",
            github:"https://github.com/patrickmklee/ExpressNotes"
        },
        {
            name:"tech-blog",
            github:"https://github.com/patrickmklee/tech_blog"
        }
    ]
    // const { name, description } = currentCategory;
    return (
        <section>
            <ul>
            {
            projects.map( project => {
                return (
                <li>
                    <Project
                    key = {project.name}
                    projectName={formatDisplayName(project.name)} >
                    </Project>
                </li>);
                })
            }
            </ul>
        </section>
    );
  }

  export default Portfolio;
