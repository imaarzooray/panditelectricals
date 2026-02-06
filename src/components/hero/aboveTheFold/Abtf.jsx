import About from "../../about/About.jsx"
import Contact from "../../contact/Contact.jsx"

import Services from "../../services/Services.jsx"
import ClientTrust from "../../trust/ClientTrust.jsx"
import LowerAbtf from "./LowerAbtf.jsx"
import UpperAbtf from "./UpperAbtf.jsx"

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