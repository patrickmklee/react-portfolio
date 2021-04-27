import React from 'react';


// import Nav from './

import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
// import Resume from './pages/Resume'

import { capitalizeFirstLetter } from '../utils/helpers';

const renderPage = ({name}) => {
  switch (name) {
    case 'about': 
      return <About />;
    case 'portfolio' :
      return <Portfolio />;
    case 'contact' :
      return <Contact />;
    default:
      return <About />;
  }
};
const PageContainer = ({page}) => {
  return (
      <main>
        <div className="jumbotron bg-secondary">
        <h1 data-testid="h1tag">{capitalizeFirstLetter(page.name)}</h1>
        <p data-testid="pagedesctag">{page.description}</p>
      </div>
        
          {renderPage(page)}
      </main>
    
  );
}

export default PageContainer;
