import React, { useState } from "react"

function Navbar(){

const [menuOpen,setMenuOpen] = useState(false)

const toggleMenu = () =>{
setMenuOpen(!menuOpen)

if(!menuOpen){
document.body.classList.add("menu-open")
}else{
document.body.classList.remove("menu-open")
}
}

const closeMenu = () =>{
setMenuOpen(false)
document.body.classList.remove("menu-open")
}



return(

<nav className="nav">

<div className="brand">
<img src="/images/logo.jpeg" alt="logo"/>
<div className="brand-text">
<h1>Metrospace</h1>
<span>INTERIORS</span>
</div>
</div>

{/* MOBILE MENU ICON */}

<div 
className={`menu-toggle ${menuOpen ? "active" : ""}`}
onClick={toggleMenu}
>
<span></span>
<span></span>
<span></span>
</div>

{/* NAV LINKS */}

<div className={`nav-links ${menuOpen ? "open" : ""}`}>

<a href="#hero" onClick={closeMenu}>Home</a>
<a href="#about" onClick={closeMenu}>About</a>
<a href="#projects" onClick={closeMenu}>Projects</a>
<a href="#process" onClick={closeMenu}>Services</a>
<a href="#consultation" onClick={closeMenu}>Consultation</a>
<a href="#footer" onClick={closeMenu}>Contact</a>

</div>

</nav>

)

}

export default Navbar