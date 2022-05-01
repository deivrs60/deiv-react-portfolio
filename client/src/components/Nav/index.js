import React from 'react';


function Nav({ currentPage, handlePageChange}) {

    return (
        <header>
            <h2>
                <a href="/" style={{textDecoration: 'none' }}>
                    D E I V
                </a>
            </h2>
            <nav>
                <ul className=" nav flex-container navbar-right">
                    <li>
                        <a href="about" onclick={() => handlePageChange('About')}
                        className= { currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        style={{ textDecoration: 'none' }} > 
                            About Me
                        </a>
                    </li>

                </ul>

            </nav>
        </header>
    );
}


export default Nav;