
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
                        <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294960/chilislogo_iwsze2.png" alt="Chili's" />
                    </span>
                    <span className="brands">
                        <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294961/mcd_dujpdz.png" alt="McDonald's" />
                    </span>
                    <span className="brands">
                        <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294961/kfc_h0zkyq.jpg" alt="KFC" />
                    </span>
                    <span className="brands">
                        <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294960/blinkit_m3q7hh.png" alt="Blinkit" />
                    </span>
                    <span className="brands">
                        <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294960/burgerKings_m9cg3o.png" alt="Burger King" />
                    </span>
                    <span className="brands">
                        <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294963/zepto_wtlxcc.png" alt="Zepto" />
                    </span>
                    <span className="brands">
                        <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294962/pw_t1okyp.png" alt="PW" />
                    </span>
                    <span className="brands">
                        <img src="https://res.cloudinary.com/aarzooray/image/upload/v1770294962/truepower_pmh6tw.png" alt="Truepower" />
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