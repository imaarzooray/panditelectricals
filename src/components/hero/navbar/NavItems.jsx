

import NavItem from "./NavItem.jsx"
function NavItems() {

    return (
        <div className="navItems" style={{ width: "414px" }}>

            <NavItem label="Home" redirection="#" />
            <NavItem label="Services" redirection="#serveCustomer" />
            <NavItem label="About" redirection="#aboutUs" />
            <NavItem label="Contact" redirection="#contactUs" />

        </div>

    )
}

export default NavItems