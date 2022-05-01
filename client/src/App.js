import React, { useState } from 'react';

// import components
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const[ currentPage, setCurrentPage ] = useState('About');


  // checks what currentPage is, returns correct page!
  const renderPage = () => {
    if(currentPage === 'About') {
      return <About />;
    }

    if (currentPage === 'Projects') {
      return <Projects />;
    }

    if (currentPage === 'Resume') {
      return <Resume />;
    }

    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage ()}
    <Footer />
    </>
  );
}

export default App;