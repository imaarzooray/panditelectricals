import { useState } from "react";
import Header from "../services/Header.jsx"
import ScMed from "./ScMed.jsx"
import Cta from "../hero/navbar/Cta.jsx"
import Input from "./Input.jsx"
function Contact() {

    const [isSocialOpen, setIsSocialOpen] = useState(false);

    const socialLinks = [
        { link: "https://www.instagram.com/pandit.elect1096/", iconClass: "ri-instagram-line" },
        { link: "https://www.facebook.com/profile.php?id=100009707116301", iconClass: "ri-facebook-line" },
        { link: "https://www.youtube.com/@hemantpandit1857", iconClass: "ri-youtube-line" },
        { link: "https://www.justdial.com/Noida/Pandit-Electricals-Near-Rajasthan-Bartan-Store-Noida-Sector-63/011PXX11-XX11-170103140023-M8F7_BZDET", iconClass: "ri-global-line" },
        { link: "https://www.github.com/imaarzooray/", iconClass: "ri-github-fill" }
    ];

    return (
        <div className="contact" id="contactUs">


            <div className="contactLeft">


                <div className="contactHead">
                    <Header
                        headerContent="Become a Part of the Pandit Electrical Family"
                        subHeaderContent="GET IN TOUCH"
                    />
                </div>
                <div className="shortIntro">
                    <div className="shortCaption">
                        <span>
                            Whether it’s a breakdown, rewinding requirement, or routine maintenance,
                            our team is ready to help with reliable and timely service.

                        </span>
                    </div>
                    <div className="shortPoints">
                        <li>

                            <span className="icon">
                                <i className="ri-arrow-right-s-line"></i>
                            </span><span className="det"> 18+ years of industry experience</span>
                        </li>
                        <li>

                            <span className="icon">
                                <i className="ri-arrow-right-s-line"></i>
                            </span><span className="det">Industrial & commercial expertise</span>
                        </li>
                        <li>

                            <span className="icon">
                                <i className="ri-arrow-right-s-line"></i>
                            </span><span className="det"> Trusted across Delhi NCR</span>
                        </li>

                    </div>
                    <div className="addressDet">
                        <li>
                            <span className="icon">
                                <i className="ri-map-pin-3-line"></i>
                            </span><span className="det"> Delhi NCR</span>
                        </li>
                        <li>
                            <span className="icon">
                                <i className="ri-phone-line"></i>
                            </span><span className="det">+91 9871760259
                            </span>
                        </li>
                        <li>
                            <span className="icon">
                                <i className="ri-mail-line"></i>
                            </span><span className="det">  contact@panditelectricals.com
                            </span>
                        </li>

                    </div>

                </div>

                <div className="socialMedia">
                    {socialLinks.map((social, index) => (
                        <ScMed
                            key={index}
                            link={social.link}
                            iconClass={social.iconClass}
                        />
                    ))}
                </div>

                <div className="socialMediaDropdown">
                    <button
                        className={`socialDropdownBtn ${isSocialOpen ? "open" : ""}`}
                        onClick={() => setIsSocialOpen(prev => !prev)}
                        aria-label="Social media links"
                    >
                        <i className="ri-share-line"></i>
                    </button>
                    {isSocialOpen && (
                        <div className="socialDropdownMenu">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="socialDropdownItem"
                                >
                                    <i className={social.iconClass}></i>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="contactRight">

                <form action="#" method="post">

                    <div className="formUpper">
                        <span>Request a Callback</span>
                    </div>
                    <div className="formMedium">
                        <Input placeHolder="Full Name" type="text" />
                        <Input placeHolder="Phone Number" type="text" />
                        <Input placeHolder="Email" type="email" />
                        <Input placeHolder="Service Type" type="text" />
                        <textarea name="" id="" resize="none"></textarea>
                    </div>
                    <div className="formLower">
                        <Cta content="Talk to an Expert" icon="ri-speak-line" width="207px" bgColor="#F57C00" />
                    </div>

                </form>

            </div>

        </div>
    )

}

export default Contact