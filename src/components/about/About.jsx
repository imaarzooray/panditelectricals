
import Header from "../services/Header.jsx"
import Info from "./Info.jsx"
function About()
{
    return(

        <div className="about" id="aboutUs">
            <div>
             <Header 
             
             headerContent="Reliable Motor Repair Expertise since 2008"
             subHeaderContent="ABOUT PANDIT ELECTRICALS"
             />
            </div>
            <div className="info">
                <Info miniHead="Business Information"/>
            </div>
        

        </div>
    )
}

export default About