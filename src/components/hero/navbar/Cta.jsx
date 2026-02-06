import { useState } from "react"

function Cta({
    bgColor,
    textSize = "18px",
    content,
    fontColor,
    icon,
    border = "none",
    fontSize,
    cursor = "pointer",
    fontStyle,
    width,
    cornerRadius = "8px",
    height = "50px",
    className = ""
}) {


    const [hover, setHover] = useState(false)

    const designing = {
        color: fontColor,
        border: "none",
        fontFamily: "Poppins",
        background: hover ? "#a85a0b" : bgColor,
        width: width,
        borderRadius: cornerRadius,
        borderColor: border,
        borderWidth: "2px",
        height: height,
        cursor: cursor,
        fontSize: textSize,
        padding: "20px 10px",


    }
    return (

        <div className="ctasas" >
            <button
                style={designing}
                className={`navButton ${className}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <a id="caller" href="tel:+919871760259" style={{textDecoration:"none",color:"black"}}>
                    {content}
                </a>
                <span>
                    <i className={icon} style={{ fontSize: "25px", fontWeight: "400" }}></i>
                </span>

            </button>
        </div>
    )
}

export default Cta