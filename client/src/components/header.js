import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import { Link } from "react-router-dom";
// import logo from '../assets/images/logo.png'
import logoTxt from '../assets/images/logoTxt.png'
import '../assets/style.css'


function Header(props) {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar className="titleBar" color="faded" expand="lg" dark>
                <Link className="" to={`/`} >


                    <img className="logoTitle" alt="" src={logoTxt} />

                </Link>

                <NavbarToggler onClick={toggleNavbar} className="toggler col-auto" />

                <Collapse isOpen={!collapsed} className='justify-content-end col-auto' navbar>

                    <Link className="align-self-end m-3" to={`about/`}>About Us</Link>

                    <Link className="align-self-end m-3" to={`contact/`}>Contact Us</Link>

                </Collapse>
            </Navbar>
        </>
    )
}

export default Header;