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
    <header className="navbar bg-light navbar-expand-md">
        <div className="container-fluid flex-direction-row"> 
        <div className="navbar navbar-brand" data-testid="brand" ><h1 className="navbar-brand" onClick={ () => {setCurrentPage(pages[0])}} >Patrick Lee</h1></div>
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