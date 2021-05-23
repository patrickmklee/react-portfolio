import React from 'react';

import { capitalizeFirstLetter } from "../../utils/helpers";


const Nav  = ( {pages, currentPage, setCurrentPage}) => {
    return (
    <nav className="navbar-nav">
        <ul className="nav nav-tabs flex-row g-1 mb-2 mb-lg-0">
            {pages.map((page) => (
            <li className={`nav-item`} 
                key={page.name} >
            <span role="link" className={`nav-link mr-2 ${page.name === currentPage.name && `active`}`} onClick={ () => {setCurrentPage(page)}} >
                {capitalizeFirstLetter(page.name)}
            </span>
            </li>
        ))}
        </ul>
    </nav>
  );
}

export default Nav;