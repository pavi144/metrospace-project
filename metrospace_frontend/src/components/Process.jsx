import React from "react";

function Approach() {
  return (
    <section id="process" className="process-section">

      <span className="section-label">SERVICES</span>

      <h2>Our Design Approach</h2>

      <p className="process-intro">
        At Metrospace Interiors, we combine creativity, functionality,
        and modern aesthetics to craft interiors that reflect your
        personality and lifestyle. Our structured design process
        ensures every project is delivered with precision.
      </p>

      {/* PROCESS STEPS */}

      <div className="process-steps">

        <div className="process-card">

          <div className="process-number">01</div>

          <img src="/images/1.jpg" alt="Consultation" />

          <h4>Consultation</h4>

          <p>
            Understanding your vision, space requirements and design
            preferences to begin the creative journey.
          </p>

        </div>


        <div className="process-card">

          <div className="process-number">02</div>

          <img src="/images/2.jpg" alt="Planning" />

          <h4>Planning</h4>

          <p>
            Creating layouts, mood boards and concepts that align with
            your functional and aesthetic goals.
          </p>

        </div>


        <div className="process-card">

          <div className="process-number">03</div>

          <img src="/images/3.jpg" alt="Execution" />

          <h4>Execution</h4>

          <p>
            Skilled craftsmen and designers bring the approved design
            concept to life with quality materials.
          </p>

        </div>


        <div className="process-card">

          <div className="process-number">04</div>

          <img src="/images/4.jpg" alt="Delivery" />

          <h4>Final Delivery</h4>

          <p>
            A beautifully completed interior space delivered with
            attention to detail and premium finishing.
          </p>

        </div>

      </div>


      {/* CTA */}

      <div className="service-cta">

        <h3>Ready to transform your space?</h3>

        <p>
          Book a consultation with our experts and start designing
          your dream interior today.
        </p>

        <a href="#consultation" className="btn">
          Book Free Consultation
        </a>

      </div>

    </section>
  );
}

export default Approach;