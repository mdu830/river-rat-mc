import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import logoTxt from '../assets/images/logoTxt.png'
import '../assets/style.css'

function Header(props) {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const handleClick = () => {
        setCollapsed(true);
    }

    return (
        <>
            <Navbar className="titleBar" color="faded" expand="lg" dark fixed="top">

                <Link className="" to={`/`} >
                    <img className="iconSmall" alt="" src={logo} />
                    <img className="logoTitle" alt="" src={logoTxt} />
                </Link>
                <NavbarToggler onClick={toggleNavbar} className="toggler justify-content-end col-auto" />
                <Collapse isOpen={!collapsed} onClick={handleClick} className='justify-content-end' navbar>

                <Link className="link row m-3" to={`services/`}>Services</Link>

                    <Link className="link row m-3" to={`testimonials/`}>Testimonials</Link>

                    <Link className="link row m-3" to={`gallery/`}>Gallery</Link>

                    <Link className="link row m-3" to={`about/`}>About Us</Link>

                    <Link className="link row m-3" to={`contact/`}>Contact Us</Link>

                </Collapse>
            </Navbar>
        </>
    )
}

export default Header;