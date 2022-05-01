import React from 'react';


function Nav(props) {
    const {
        setContactSelected,
        setProjectSelected,
        setResumeSelected,
        categories,
        currentCategory,
        setCurrentCategory
    } = props;

    return (
        <nav className ="navbar navbar-expand lg float-right">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 h4">
                    {categories.map((category => (
                        <li className={`nav-item mx-3 ${
                            currentCategory === category && 'navActive'
                        }`}
                        key = { category }>
                            <span onClick = { () => {
                                setCurrentCategory(category)
                                if(category === 'Project Portfolio') {
                                    setContactSelected(false)
                                    setProjectSelected(true)
                                    setResumeSelected(false)
                                }  else if(category === 'Contact') {
                                    setContactSelected(true)
                                    setProjectSelected(false)
                                    setResumeSelected(false)
                                } else if(category === 'Resume') {
                                    setContactSelected(false)
                                    setProjectSelected(false)
                                    setResumeSelected(true)
                                } else {
                                    setContactSelected(false)
                                    setProjectSelected(false)
                                    setResumeSelected(false)
                                }
                            }}>
                                {category}
                            
                            </span>
                        </li>
                    )))}
                </ul>
            </div>
        </nav>

    )
}


export default Nav;