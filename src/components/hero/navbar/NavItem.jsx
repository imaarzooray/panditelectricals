

function NavItem({label,redirection})
{
    return(

        <span style={{padding:"2px 15px"}}>
            <a  href={redirection} className="navLinkers">{label}</a>
        </span>
    )
}

export default NavItem