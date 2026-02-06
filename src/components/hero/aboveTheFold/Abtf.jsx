import About from "../../about/About"
import Contact from "../../contact/Contact"
import Divider from "../../divider/Divider"
import Footr from "../../footer/Footr"
import Services from "../../services/Services"
import ClientTrust from "../../trust/ClientTrust"
import LowerAbtf from "./lowerAbtf"
import UpperAbtf from "./upperAbtf"

function Abtf() {
    return (
        <div className="abtf">

            <div>

                <UpperAbtf />
                <LowerAbtf />
            </div>
            <div>

                <Services />
            </div>
          
            <div>
                <ClientTrust/>
            </div>

            <div>
                <About/>
            </div>
            <div>
                <Contact/>
            </div>
          

        

        </div>
    )
}

export default Abtf