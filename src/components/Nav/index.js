import React from 'react';

import { capitalizeFirstLetter } from "../../utils/helpers";


const Nav  = ( {pages, currentPage, setCurrentPage}) => {
    // const {
    //     categories=[],
    //     setCurrentCategory,
    //     currentCategory 
    // } = props;
    // //   const [currentCategory, setCurrentCategory] = useState(categories[0]);

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    //   }
    return (
    <nav>
        <ul className="flex-row">
        {pages.map((page) => (
            <li
            className={`mx-2 ${pages.name === currentPage.name && 'navActive'}`} 
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