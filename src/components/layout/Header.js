import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header()  {

    useEffect(() => {
        const toNewsBtn = document.querySelectorAll('.nav-link')
        toNewsBtn.forEach((item) => {
            item.addEventListener('click', () => {
                window.scrollTo(0,0)
            })
        })
    },[])

    const [navState, setNavState] = useState(false)

    const toggleNav = () => {
    setNavState(!navState);
    }

    return(
    <React.Fragment>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={toggleNav} />
                <NavbarBrand className="brand" href="/TheHaflington">
                    <img src='https://raw.githubusercontent.com/Trungbui89/TheHaflington/51c3dec5f4a019443f8d45f1fb577331d6470afd/assets/icon/logo/small-logo.svg' alt='The Haflington' />
                </NavbarBrand>
                <Collapse isOpen={navState} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink onClick={toggleNav} className="nav-link"  to='/TheHaflington'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggleNav} className="nav-link" to='/TheHaflington/news'>News</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggleNav} className="nav-link"  to='/TheHaflington/menu'>Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggleNav} className="nav-link"  to='/TheHaflington/book'>Book</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggleNav} className="nav-link" to='/TheHaflington/contact'>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    </React.Fragment>
    )
}

export default Header;