import Header from "./Header.jsx"
import ServicesBox from "./ServicesBox.jsx"
import Cta from "../hero/navbar/Cta.jsx"
function Services() {

 const services = [
  {
    icon: "ri-tools-line",
    title: "Industrial Electrical Solutions",
    description: [
      "End-to-end electrical solutions for industrial and commercial systems.",
      "Focused on performance, safety, and long-term efficiency."
    ],
    items: [
      "Motor winding",
      "APFC & power factor correction",
      "Panel repair & maintenance"
    ]
  },
  {
    icon: "ri-water-flash-line",
    title: "Mechanical & Pump Systems",
    description: [
      "Expert servicing of pumps and mechanical fluid systems.",
      "Ensuring pressure stability and smooth operation."
    ],
    items: [
      "Hydropneumatic pump repair",
      "Pressure system troubleshooting",
      "Preventive maintenance support"
    ]
  },
  {
    icon: "ri-windy-line",
    title: "Kitchen",
    description: [
      "Servicing of commercial kitchen ventilation.",
      "Improving airflow, safety, and heat management."
    ],
    items: [
      "Kitchen exhaust systems",
      "Ventilation motor repair",
      "Airflow efficiency improvement"
    ]
  },
  {
    icon: "ri-fire-line",
    title: "Appliance Repair Services",
    description: [
      "Reliable repair of commercial and small electrical appliances.",
      "Ensuring safe operation and quick turnaround."
    ],
    items: [
      "Microwave repair",
      "Washing Machine Repair",
      "Geyser Repair",
      "Rapid toaster repair",
      "Electrical fault diagnosis"
    ]
  },
  {
    icon: "ri-map-pin-2-line",
    title: "On-Site & Workshop Services",
    description: [
      "Flexible service options based on job requirements.",
      "On-site support or complete workshop servicing."
    ],
    items: [
      "Factory & site visits",
      "Workshop repair & rewinding",
      "Flexible service approach"
    ],
    identifier: ["onsite"]
  },
  {
    icon: "ri-time-line",
    title: "Quick Response & Emergency Support",
    description: [
      "Fast response for urgent breakdown and repair cases.",
      "Minimizing downtime and operational loss."
    ],
    items: [
      "Emergency breakdown support",
      "Priority inspection & repair",
      "Fast turnaround time"
    ],
    identifier: ["urgent"]
  }
];


    return (
        <div className="services" id="serveCustomer">
            <div className="header">

                <Header
                    headerContent="Complete Motor Repair & Rewinding Solutions"
                    subHeaderContent="From small commerical motors to heavy-duty industrial machinery."
                />
            </div>

            <div className="serviceCont">

            <div className="cont" >
                {services.map((service, index) => (
                    <div className="cont" key={index}>
                        <ServicesBox
                            img="E:/Business/PanditElectricals/code/panditElectricalsWebApp/frontend/src/assets/services/pump.jpg"
                            
                            head={service.title}
                            desc={service}
                            icon={service.icon
                            }
                            classname={service.identifier}
                        />
                    </div>
                ))}
            </div>
            </div>






            <div className="servCta">
                <div className="cap">
                    <span>Not sure which service you need ?</span>
                </div>
                <div className="btn">
                    <Cta
                        bgColor="#F57C00"
                        content="Talk to an Expert"
                        fontColor="FFFFFF"
                        width="200px"
                        pdX="18px"
                        pdY="10px"

                    />
                </div>
            </div>
        </div>
    )

}

export default Services