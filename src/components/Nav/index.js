import React from 'react';

import { capitalizeFirstLetter } from "../../utils/helpers";


const Nav  = ( {pages, currentPage, setCurrentPage}) => {
    return (
    <nav>
        <ul className="flex-row">
        {pages.map((page) => (
            <li
            className={`mx-2 ${page.name === currentPage.name && 'navActive'}`} 
            key={page.name} >
            <span onClick={ () => setCurrentPage(page)} >
                {capitalizeFirstLetter(page.name)}
            </span>
            </li>
        ))}
        </ul>
    </nav>
  );
}

export default Nav;