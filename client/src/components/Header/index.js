import React from 'react';
import Nav from '../Nav';


function Header({currentPage, handlePageChange}) {

    return(
        <header className="flex-row px-1">
            <div className="logo">
                <h1 className="text-left">
                <a href="/" style={{textDecoration: 'none' }}>
                    D E I V 
                 </a>   
                </h1>
                <Nav
                    currentpage={currentPage}
                    handlePageChange={handlePageChange}
                />
            </div>
        </header>
    );
}


export default Header;