
function Footr() {
    return (

        <footer className="footr">


            <div className="upperFootr">
                <div className="sec-1">
                    <div className="sec-1Upper">
                        <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294917/logo_hiwhpf.png" alt="logo not displayed" />
                    </div>

                    <div className="sec-1Lower">
                        <span>Pandit Electricals provides reliable motor repair and rewinding services
                            for industrial and commercial clients across Delhi NCR.
                        </span>
                    </div>
                </div>
                <div className="sec-2">
                    <div className="sec-2Head">
                        OUR SERVICES
                    </div>
                    <div className="sec-2Lower">
                        <li>Motor Repair</li>
                        <li>Motor Rewinding</li>
                        <li>Industrial Motors</li>
                        <li>Commercial Motors</li>
                        <li>On-site Service</li>
                    </div>
                </div>
                <div className="sec-3">
                    <div className="sec-3Part">
                        <span className="sec-3Parts">
                            <i className="ri-map-pin-4-line"></i>
                            <span className="sec3PartsLabel">Address</span>
                        </span>
                        <span className="sec-3Parts">
                            <span>Delhi NCR</span>
                        </span>
                    </div>
                    <div className="sec-3Part">
                        <span className="sec-3Parts">
                            <i className="ri-phone-line"></i>
                            <span className="sec3PartsLabel">Phone</span>
                        </span>
                        <span className="sec-3Parts">
                            <span>
                                +91 9871760259  </span>
                        </span>
                    </div>
                    <div className="sec-3Part">
                        <span className="sec-3Parts">
                            <i className="ri-mail-line"></i>
                            <span className="sec3PartsLabel">Email:</span>
                        </span>
                        <span className="sec-3Parts">
                            <span>  info@panditelectricals.com</span>
                        </span>
                    </div>

                </div>
                <div className="sec-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4895376893837!2d77.31724567550152!3d28.585087386233628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ca639ff80f%3A0x2d4b9bcb343ae2fe!2sPandit%20Electricals!5e0!3m2!1sen!2sin!4v1768458251599!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Pandit Electricals Location"
                    ></iframe>
                </div>

            </div>
            <div className="lowerFootr">
                <div className="secLeft">
                    <span>&copy; 2025 Pandit Electricals. All rights reserved.</span>
                </div>
                <div className="secRight">
                    <span>
                        <span className="txt">Developed with love 💖 by </span>
                        <span className="link"><a target="_blank" href="https://www.linkedin.com/in/imaarzooray/">imaarzooray</a></span>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footr