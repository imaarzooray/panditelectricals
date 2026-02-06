

function Header({headerContent,subHeaderContent})
{

    return (

        <div className="head">
            <div className="headerContent">
                {headerContent}
            </div>
            <div className="subHeaderContent">
                {subHeaderContent}
            </div>
        </div>
    )

}


export default Header