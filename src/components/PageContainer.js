import React,{useState, useEffect} from 'react';
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { capitalizeFirstLetter } from '../utils/helpers';

const renderPage = ({name}) => {
  switch (name) {
    case 'about': 
      return <About />;
    case 'portfolio' :
      return <Portfolio />;
    case 'contact' :
      return <Contact />;
    case 'resume':
      return <Resume />
    default:
      return <Portfolio />;
  }
};


const PageContainer = ({page}) => {
  const [pages] = useState([
    { name: "portfolio", description: "My projects" },
    {
      name: "about",
      description: "Generic about me paragraph"
    },
    { name: "contact", description: "Get in touch" },
    {
      name: "resume",
      description: "My experience"
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
  <div className="container-fluid">
    <Header pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
      <main>
        <div className="jumbotron mb-1 bg-secondary "> 
          <h2 data-testid="h1tag">{capitalizeFirstLetter(currentPage.name)}</h2>
          <p data-testid="pagedesctag">{currentPage.description}</p>
        </div>
          {renderPage(currentPage)}
      </main>
      <Footer />
  </div>
    
  );
}

export default PageContainer;
