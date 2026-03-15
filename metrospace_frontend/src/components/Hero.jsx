import React from "react";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-text">

        <span className="eyebrow">INTERIOR DESIGN</span>

        <h1>
          Transform Your Space <br />
          Into A Masterpiece
        </h1>

        <p>
          We create elegant, functional, and modern interiors that
          reflect your personality and lifestyle. From concept to
          completion, we turn your vision into reality.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">

          <a href="#consultation" className="btn">
            Book Consultation
          </a>

          <a href="#projects" className="btn-outline">
            View Projects
          </a>

        </div>

        {/* TRUST */}
        <div className="hero-rating">

          ⭐⭐⭐⭐⭐

          <span>Trusted by 150+ happy clients</span>

        </div>

        {/* STATS */}
        <div className="hero-stats">

          <div>
            <strong>120+</strong>
            <small>Projects Completed</small>
          </div>

          <div>
            <strong>8+</strong>
            <small>Years Experience</small>
          </div>

          <div>
            <strong>100%</strong>
            <small>Client Satisfaction</small>
          </div>

        </div>

      </div>

      <div className="hero-image">

        <img src="/images/2.jpg" alt="Interior Design" />

        <div className="hero-float">
          <img src="/images/3.jpg" alt="Design" />
        </div>

      </div>

    </section>
  );
}

export default Hero;