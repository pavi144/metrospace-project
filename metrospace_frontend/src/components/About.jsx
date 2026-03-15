import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";


function About() {

const aboutRef = useRef(null)
  const [trigger,setTrigger] = useState(0)

  useEffect(()=>{

    const observer = new IntersectionObserver(
      (entries)=>{

        if(entries[0].isIntersecting){

          setTrigger(prev => prev + 1)

        }

      },
      {threshold:0.5}
    )

    if(aboutRef.current){
      observer.observe(aboutRef.current)
    }

    return ()=>observer.disconnect()

  },[])

  return (
    <section id="about" className="about" ref={aboutRef}>

      <span className="section-label">ABOUT</span>

      <h2>Designing Spaces That Inspire</h2>

      <p className="about-intro">
        Metrospace Interiors creates elegant, functional, and modern interiors
        designed to reflect your lifestyle. We combine creativity, premium
        materials, and innovative design solutions to transform spaces.
      </p>

      <div className="about-stats">

        <div className="stat-card">
          <Counter key={trigger+"8"} value={8}/>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <Counter key={trigger+"120"} value={120}/>
          <p>Completed Projects</p>
        </div>

        <div className="stat-card">
          <Counter key={trigger+"150"} value={150}/>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <Counter key={trigger+"25"} value={25}/>
          <p>Design Experts</p>
        </div>

      </div>

      {/* MAIN GRID */}

      <div className="about-grid">

        <div className="about-image">
          <img src="/images/1.jpg" alt="Interior"/>
        </div>

        <div className="about-content">

          <p>
            Our experienced designers work closely with clients to understand
            their needs and vision. Whether residential or commercial, we
            deliver interiors that balance beauty, comfort and functionality.
          </p>

          <ul className="about-points">
            <li>Custom Interior Design Solutions</li>
            <li>Premium Quality Materials</li>
            <li>Experienced Designers</li>
            <li>Modern Space Planning</li>
            <li>On-Time Project Delivery</li>
          </ul>

        </div>

      </div>

      {/* STATS */}

  {/* FEATURE HIGHLIGHTS */}

      <div className="about-highlights">

        <div className="highlight-card">
          <h3>Luxury Design</h3>
          <p>Elegant interiors crafted with modern aesthetics.</p>
        </div>

        <div className="highlight-card">
          <h3>Smart Planning</h3>
          <p>Efficient layouts that maximize comfort and usability.</p>
        </div>

        <div className="highlight-card">
          <h3>Premium Materials</h3>
          <p>High quality materials with durable finishes.</p>
        </div>

      </div>
      {/* CTA */}

      <div className="about-cta">

        <h3>Ready to transform your space?</h3>

        <p>
          Let our designers help you create interiors that inspire comfort,
          beauty and functionality.
        </p>

        <a href="#consultation" className="btn">
          Book a Free Consultation
        </a>

      </div>

    </section>
  );
}

export default About;