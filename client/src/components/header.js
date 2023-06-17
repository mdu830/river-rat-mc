import React, { useState } from 'react';
import { Navbar, NavLink,} from 'reactstrap';


function Header(props) {

    // const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>
                <Navbar className="titleBar" color="light" light expand="md" fixed="top">

                        {/* <img className="image-fluid icon" alt="" src={Icon} /> */}

                        <div className='logoTitle col-auto'></div>
                        <div className="name col-auto">River Rat Marine Construction</div>

                    <div className="m-4"></div>
                </Navbar>
            </div>
        </>
    )
}

export default Header;