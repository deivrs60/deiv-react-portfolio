import React, { useState } from 'react';
import Nav from '../Nav';
import Contact from '../Contact';
import About from '../About';
import Project from '../Project';
import Resume from '../Resume';
import Footer from '../Footer';


function Header() {
    const [
        contactSelected,
        setContactSelected
    ] = useState(false);
    const [
        projectSelected,
        setProjectSelected
    ] = useState(false);
    const [
        resumeSelected,
        setResumeSelected
    ] = useState(false);
    const [
        categories
    ] = useState([
        'About Me',
        'Project Portfolio',
        'Resume',
        'Contact'
    ]);
    const [
        currentCategory,
        setCurrentCategory
    ] = useState(categories[0]);

    function renderContent() {
        if(contactSelected) {
            return <Contact></Contact>
        } 
        if(projectSelected) {
            return <Project></Project>
        }
        if (resumeSelected) {
            return <Resume></Resume>
        } else {
            return <About></About>
        }
    };

    return(
        <div>
            <header className="flex-row px-1">
                <div className="logo">
                    <h1 className="text-left" id="mainlogo">
                    <a href="/deiv-react-portfolio/" style={{textDecoration: 'none' }}>
                        D E I V 
                    </a>   
                    </h1>
                <Nav
                categories={ categories }
                currentCategory={ currentCategory }
                setCurrentCategory={ setCurrentCategory } 
                contactSelected= { contactSelected }
                setContactSelected = { setContactSelected }
                projectSelected = { projectSelected }
                setProjectSelected = { setProjectSelected }
                resumeSelected = { resumeSelected }
                setResumeSelected = { setResumeSelected }
                ></Nav>
                </div>
            </header>
            <div id="mainbody">
                <main className="container pb-5">
                    { renderContent() }
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
}


export default Header;