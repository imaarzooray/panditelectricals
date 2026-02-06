import Header from "../services/Header"
import ServicesBox from "../services/ServicesBox"

function ClientTrust() {

    return (

    <section className="whyTrustSection">
      <div className="trustHeader">
        <p className="trustTagline">Built on Experience, Precision & Reliability</p>
        <h2>Why Clients Trust Us</h2>
      </div>

      <div className="trustGrid">
        {/* CARD 1 */}
        <div className="trustCard experienceCard">
          <div className="bigNumber">18+</div>
          <h3>Years of Proven Experience</h3>
          <p>
            Hands-on expertise in industrial, commercial, and heavy-duty
            motor repair and rewinding across Delhi-NCR.
          </p>

          <ul>
            <li>Industrial Motors</li>
            <li>Commercial Units</li>
            <li>High-Capacity Rewinding</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="trustCard processCard">
          <h3>Precision-Driven Process</h3>

          <div className="processFlow">
            <span>Inspection</span>
            <span>→</span>
            <span>Rewinding</span>
            <span>→</span>
            <span>Testing</span>
            <span>→</span>
            <span>Delivery</span>
          </div>

          <p>
            Each motor is repaired using accurate winding calculations,
            quality insulation, and performance testing before dispatch.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="trustCard reliabilityCard">
          <div className="trustBadge">✔</div>
          <h3>Trusted by Professionals</h3>
          <p>
            Builders, factories, and facility managers rely on us for honest
            diagnosis, transparent pricing, and timely delivery.
          </p>

          <div className="clientTypes">
            <span>Factories</span>
            <span>Contractors</span>
            <span>Facilities</span>
          </div>
        </div>
      </div>
    </section>
  
    )
}

export default ClientTrust