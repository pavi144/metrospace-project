import React, { useState } from "react";

const projects = [
  {
    id:1,
    title:"Luxury Living Room",
    category:"Living Room",
    img:"/images/1.jpg"
  },
  {
    id:2,
    title:"Modern Bedroom",
    category:"Bedroom",
    img:"/images/2.jpg"
  },
  {
    id:3,
    title:"Elegant Hall",
    category:"Hall Design",
    img:"/images/3.jpg"
  },
  {
    id:4,
    title:"TV Unit Interior",
    category:"TV Unit",
    img:"/images/4.jpg"
  },
  {
    id:5,
    title:"Dining Interior",
    category:"Dining",
    img:"/images/5.jpg"
  }
];

function Projects(){

const [active,setActive] = useState(null);

return(

<section id="projects" className="projects-section">

{/* HEADER */}

<div className="projects-header">

<span className="section-label">PROJECTS</span>

<h2>Our Interior Design Portfolio</h2>

<p className="projects-description">
Every project reflects our commitment to creativity,
quality materials, and functional design. Explore
some of our recent interior transformations crafted
for modern living.
</p>

{/* CATEGORY TAGS */}

<div className="project-categories">

<span>Living Room</span>
<span>Bedroom</span>
<span>Hall</span>
<span>Dining</span>
<span>TV Unit</span>

</div>

</div>


{/* PROJECT LAYOUT */}

<div className="projects-layout">

{/* FEATURED PROJECT */}

<div
className="project-large"
onClick={()=>setActive(projects[0])}
>

<img src={projects[0].img} alt={projects[0].title}/>

<div className="project-overlay">

<h3>{projects[0].title}</h3>

<p>{projects[0].category}</p>

</div>

</div>


{/* SMALL PROJECT GRID */}

<div className="project-small-grid">

{projects.slice(1).map((p)=>(

<div
key={p.id}
className="project-small"
onClick={()=>setActive(p)}
>

<img src={p.img} alt={p.title}/>

<div className="project-overlay">

<h3>{p.title}</h3>

<p>{p.category}</p>

</div>

</div>

))}

</div>

</div>


{/* MODAL */}

{active && (

<div className="project-modal" onClick={()=>setActive(null)}>

<div className="modal-content">

<img src={active.img} alt={active.title}/>

<h3>{active.title}</h3>

<p>
This project showcases our attention to detail,
premium materials and modern interior styling.
</p>

<button onClick={()=>setActive(null)}>Close</button>

</div>

</div>

)}

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

)

}

export default Projects