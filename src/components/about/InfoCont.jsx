function InfoCont({label,informations,iconClass})
{
    return(
        <div className="infoCont">


<div className="rightInfoCont">
    <div className="left">
    <i className={iconClass}></i>

    <div className="upRightInfoCont">{label}</div>
    </div>
    <div className="right">

    <div className="downRightInfoCont">{informations}</div>
    </div>
</div>
        </div>
    )
}

export default InfoCont