import { useState } from "react";
import Logo from "./Logo.jsx"
import NavItems from "./NavItems.jsx";
import Cta from "./Cta.jsx";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">

                <Logo />

                <div className="desktopNav">
                    <NavItems />
                </div>

                <div className="navRight">
                    <button
                        className={`hamburger ${isMenuOpen ? "open" : ""}`}
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        aria-label="Toggle navigation menu"
                    >
                        <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                    </button>

                    <Cta
                        content="Call Now"
                        bgColor="#F57C00"
                        fontColor="FFFFFF"
                        border="none" fontSize="20px"
                        fontStyle="bold"
                        height="50px"
                        textSize="19px"
                        width="160px"
                        icon="ri-phone-fill"
                        className="navCallButton"
                    />
                </div>

            </nav>

            {isMenuOpen && (
                <div className="mobileNav">
                    <NavItems />
                </div>
            )}
        </>

    )
}

export default Navbar