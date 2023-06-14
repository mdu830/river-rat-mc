import '../assets/style.css'
// import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import { Navbar, NavLink } from 'reactstrap';



function Header(props) {

    // const [isOpen, setIsOpen] = useState(false);

    // let history = useHistory();

    // navbar clicks
    const handleHomeLink = () => {
        // history.push('/')
        // setIsOpen(false);
    }

    return (
        <>
            <div>
                <Navbar className="titleBar" color="light" light expand="md" fixed="top">
                    <NavLink onClick={handleHomeLink}>
                        {/* <img className="image-fluid icon" alt="" src={Icon} /> */}
                    </NavLink>
                    <NavLink onClick={handleHomeLink}>
                        <div className="appTitle">River Rat Marine Construction</div>
                    </NavLink>
                    
                    <div className="m-4"></div>
                </Navbar>
            </div>
        </>
    )
}

export default Header;