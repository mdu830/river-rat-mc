import React, { useState } from 'react';
import { Navbar } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";


function Header(props) {

    return (
        <>
            <div>
                <Navbar className="titleBar" color="light" light expand="md" fixed="top">

                        {/* <img className="image-fluid icon" alt="" src={Icon} /> */}

                        <div className='logoTitle col-auto'></div>
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