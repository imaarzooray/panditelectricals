import Cta from "../navbar/Cta"

function Ctas(){
    return(

        <div className="ctas">

<Cta bgColor="#F57C00" content="Talk to an Expert"
fontColor="white" width="200px" />

<span className="ter"></span>
<Cta bgColor="white" content="Request On-Site Service Us"
fontColor="#1FBAC6" width="306px" border="#1FBAC6" />

        </div>
    )
}

export default Ctas