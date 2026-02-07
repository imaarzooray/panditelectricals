import InfoCont from "./InfoCont.jsx"

function Info({ miniHead }) {
    return (
        <div className="information">
            <div className="upperInformation">

                <div className="minInfoHeader">
                    <div className="minoInfoHeading">

                        {miniHead}
                    </div>


                    <div className="leftDetailsInfo">

                        <InfoCont iconClass="ri-building-line" label="Established " informations="2008" />
                        <InfoCont iconClass="ri-map-pin-line" label="Workshop Address " informations="Pandit electricals, Gulab bhawan, Near mehul bharat gas agency,
Opposite V-31, Harola, Sector-5, Noida, 201301" />

                        <InfoCont iconClass="ri-phone-line" label="Phone " informations="+91 9871760259"
                        />
                        <InfoCont iconClass="ri-mail-line" label="Email " informations="info@panditelectricals.com | 
panditelect1096@gmail.com" />
                        <InfoCont iconClass="ri-service-bell-line" label="Service Area " informations="Delhi, Noida, Gurgaon, Faridabad, Ghaziabad [Delhi-NCR]" />
                    </div>
                </div>
                <div className="detailsInfo">
                        {/* <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294918/shop_ybgrde.jpg" alt="" srcset="" /> */}
                    
                </div>
            </div>

            <br />
           

            <div className="lowerInformation">
            

                <div className="minInfoHeader">

                    <div className="minInfoHeading">
                    {"FOUNDER & OWNER"}

                    </div>
                    <div className="leftDetailsInfo">

                        <InfoCont iconClass="ri-user-line" label="Name " informations="Hemant Kumar" />
                        <InfoCont iconClass="ri-settings-5-line" label="Role " informations="Founder & Technical Head" />

                        <InfoCont iconClass="ri-phone-line" label="Phone " informations="+91 9871760259"
                        />
                        <InfoCont iconClass="ri-mail-line" label="Email " informations="admin@panditelectricals.com | 
panditelect1096@gmail.com" />
                        <InfoCont iconClass="ri-user-settings-line" label="Responsibility Line " informations="Oversees quality control and technical operations.
" />
                        <InfoCont iconClass="ri-info-i" label="Bio " informations="With over 18 years of hands-on experience in motor repair and rewinding, Hemant Pandit leads operations with a focus on precision, safety, and dependable service.
" />
                    </div>
                </div>



                <div className="detailsInfo">
                    

 {/* <img src={owner} alt=""  /> */}

                    
                </div>
            </div>
        </div>
    )
}


export default Info