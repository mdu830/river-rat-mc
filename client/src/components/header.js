import React, { useState } from 'react';
import { Navbar } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png'


function Header(props) {

    return (
        <>
            <div>
                <Navbar className="titleBar" color="light" light expand="md" fixed="top">


                    <div className='logoTitle col-auto'>
                        <img className="image-fluid icon" alt="" src={logo} />

                    </div>
                    <div className="name col-auto">River Rat Marine Construction</div>
                    <Link to={`/`}>Home</Link>
                    <Link to={`contact/`}>Contact Us</Link>
                    <Link to={`about/`}>About Us</Link>



                    <div className="m-4"></div>
                </Navbar>
            </div>
        </>
    )
}

export default Header;