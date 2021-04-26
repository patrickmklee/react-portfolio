import React,{useEffect} from 'react';
import Nav from '../Nav'
import { capitalizeFirstLetter } from "../../utils/helpers";


function Header(props) {
    const {
        pages=[],
        setCurrentPage,
        currentPage 
    } = props;
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
        },
        [currentPage]);

    //   const [currentCategory, setCurrentCategory] = useState(categories[0]);

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    //   }
    return (
    <header className="flex-row my-5">
        <h2>
            <a data-testid="link" href="/">
            <span role="img" aria-label="camera"></span>Patrick Lee
            </a>
        </h2>
        <Nav
        pages={pages}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage} >
        </Nav>
    </header>
  );
}

export default Header;