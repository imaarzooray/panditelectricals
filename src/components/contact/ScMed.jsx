function ScMed({link,iconClass}) {
    return (
        <div className="scMed">
            <a href={link} target="_blank">
                <span className="icon"><i className={iconClass}></i></span>
            </a>
        </div>
    )
}

export default ScMed