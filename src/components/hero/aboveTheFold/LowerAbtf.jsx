import chilisLogo from "../../../assets/brands/chilislogo.png";
import mcdLogo from "../../../assets/brands/mcd.png";
import kfcLogo from "../../../assets/brands/kfc.jpg";
import blinkitLogo from "../../../assets/brands/blinkit.png";
import burgerKingsLogo from "../../../assets/brands/burgerKings.png";
import zeptoLogo from "../../../assets/brands/zepto.png";
import pwLogo from "../../../assets/brands/pw.png";
import truepowerLogo from "../../../assets/brands/truepower.png";
import { useRef } from "react";

function LowerAbtf() {


      const scrollRef = useRef(null);

    const slide = (direction) => {
        if (!scrollRef.current) return;

        const scrollAmount = 240;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };
    return (

        <div className="roll">

            <div className="caption">
                <span>Worked with brands including</span>
            </div>
            <div className="roller">

                <div className="rollerLeft" onClick={() => slide("left")}>
                    <i className="ri-arrow-left-line"></i>
                </div>
                <div className="rollerMedium" ref={scrollRef}>


                    <span className="brands">
                        <img src={chilisLogo} alt="Chili's" />
                    </span>
                    <span className="brands">
                        <img src={mcdLogo} alt="McDonald's" />
                    </span>
                    <span className="brands">
                        <img src={kfcLogo} alt="KFC" />
                    </span>
                    <span className="brands">
                        <img src={blinkitLogo} alt="Blinkit" />
                    </span>
                    <span className="brands">
                        <img src={burgerKingsLogo} alt="Burger King" />
                    </span>
                    <span className="brands">
                        <img src={zeptoLogo} alt="Zepto" />
                    </span>
                    <span className="brands">
                        <img src={pwLogo} alt="PW" />
                    </span>
                    <span className="brands">
                        <img src={truepowerLogo} alt="Truepower" />
                    </span>
                </div>
                <div className="rollerRight" onClick={() => slide("right")}>
                    <i className="ri-arrow-right-line"></i>
                </div>


            </div>
        </div>

    )
}

export default LowerAbtf