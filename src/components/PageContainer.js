import React, { useState } from 'react';


// import Nav from './
import Header from './Header'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
// import Resume from './pages/Resume'

import { capitalizeFirstLetter } from '../utils/helpers';
// import { capitalizeFirstLetter } from '../utils/helpers';

const renderPage = ({name}) => {
  switch (name) {
    case 'about': 
      return <About />;
    case 'portfolio' :
      return <Portfolio />;
    case 'contact' :
      return <Contact />;
    default:
      return <Portfolio />;
  }
};
function PageContainer() {
  const [pages] = useState([
    {
      name: "about",
      description: "Geeneric about me paragraph"
    },
    { name: "portfolio", description: "My projects" },
    { name: "contact", description: "Get in touch" },
    {
      name: "resume",
      description: "My experience"
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  
  // const currentPage = pages.find( page => page.name === currentPage.name);

  return (
    <div className="container px-2">
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} >
      </Header>
      <main>
          <h1 data-testid="h1tag">{capitalizeFirstLetter(currentPage.name)}</h1>
          <p>{currentPage.description}</p>
          <section>
          {renderPage(currentPage)}
          </section>

      </main>
    </div>
  );
}

export default PageContainer;
