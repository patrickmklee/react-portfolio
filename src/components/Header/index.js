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
    <header className="navbar navbar-expand-md">
        <div className="container-fluid flex-direction-row"> 
        <a className="navbar navbar-brand" data-testid="brand" href="/">Patrick Lee</a>
            <Nav
            pages={pages}
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage} >
            </Nav>
        </div>
    </header>
  );
}

export default Header;