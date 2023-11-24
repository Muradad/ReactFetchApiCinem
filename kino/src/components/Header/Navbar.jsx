import "./Header.scss";
import React, { useState } from 'react';


const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };
    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
      <>
        <header className="site-header">
            <div className="header-content">
                <div className="header-top">
                </div>
                <div className="header-bottom">
                    <a  href="#" className="header-bottom-logo">
                        <img src="//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2018/02/logo.svg"
                             alt="Site logo"/>
                    </a>
                    <div className="header-bottom-navigation">
                        <a href="/">
                            HOME
                        </a>
                        <a href="#"
                           onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave}
                        >
                            WHAT'S ON
                            <div className={`nav-dropdown ${isDropdownOpen ? 'nav-dropdown-active' : ''}`}>
                                <h5>
                                    ALL MOVIES
                                </h5>
                            </div>
                        </a>
                        <a href="#">
                            NEWS
                        </a>
                        <a href="#">
                            SHORTCODES
                        </a>
                        <a href="#">
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>
            
        </header>

        
      </>
    )
}

export default Header;