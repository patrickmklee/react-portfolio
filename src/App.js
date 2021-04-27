import React, {useState}  from 'react';
// import logo from './logo.svg';
import Footer from './components/Footer'
import Header from './components/Header'
import PageContainer from './components/PageContainer.js';
import {faGit} from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
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

  return (
  <div className="container-fluid">
    <Header
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} >
    </Header>
        <PageContainer page={currentPage}        >
        
        </PageContainer>
        
      <Footer />
    </div>
  );
};

export default App;
