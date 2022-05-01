import React from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom'

function Header() {

    return(
        <header className="flex-row px-1">
            <div className="logo">
                <h1>
                    <Link to="/"> D E I V </Link>
                </h1>
                <Nav></Nav>
            </div>
        </header>
    );
}


export default Header;