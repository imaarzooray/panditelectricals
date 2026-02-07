import Cta from "../navbar/Cta.jsx"

function Ctas(){
    return(

        <div className="ctas">

<Cta bgColor="#F57C00" content="Talk to an Expert"
fontColor="white" width="200px" />

<span className="ter"></span>

<a className="downloadBrochure"
href="https://res.cloudinary.com/aarzooray/image/upload/pandit_electricals_booklet_jkm_y1cwq6.pdf"
  download="Pandit_Electricals_Brochure.pdf"
  
>
    <span className="brohureIcon"><i class="ri-newspaper-line"></i></span>
    <span href="https://res.cloudinary.com/aarzooray/raw/upload/pandit_electricals_booklet_jkm_y1cwq6.pdf" className="brochureLabel" download="https://res.cloudinary.com/aarzooray/raw/upload/pandit_electricals_booklet_jkm_y1cwq6.pdf">Download Brochure</span>
</a>

        </div>
    )
}

export default Ctas