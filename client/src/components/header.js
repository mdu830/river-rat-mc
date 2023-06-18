import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import '../assets/style.css'


function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar className="titleBar" color="dark" light expand="md" fixed="top">

                <Link to={`/`}>
                    <img className="image-fluid icon" alt="" src={logo} />
                </Link>

                <NavbarToggler className='toggler' onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem className='p-2'>
                            <Link className=""to={`about/`}>About Us</Link>
                        </NavItem>
                        <NavItem className='p-2'>
                            <Link to={`contact/`}>Contact Us</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
                
            </Navbar>
        </>
    )
}

export default Header;