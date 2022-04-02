import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header()  {

    const [navState, setNavState] = useState(false)

    const toggleNav = () => {
    setNavState(!navState);
    }

    return(
    <React.Fragment>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={toggleNav} />
                <NavbarBrand className="brand" href="/home">
                    <img src='assets/icon/logo/small-logo.svg' alt='The Haflington' />
                </NavbarBrand>
                <Collapse isOpen={navState} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/menu'>Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/book'>Book</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    </React.Fragment>
    )
}

export default Header;