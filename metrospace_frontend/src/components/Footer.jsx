import React from "react"
import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaWhatsapp,
FaMapMarkerAlt,
FaPhoneAlt,
FaEnvelope
} from "react-icons/fa"

function Footer(){

return(

<footer className="footer" id="footer">

<div className="footer-container">

{/* COMPANY INFO */}

<div className="footer-col">

<h3 className="footer-logo">Metrospace Interiors</h3>

<p>
Creating elegant and functional interiors for modern living.
We design spaces that reflect comfort, luxury and creativity.
</p>

<div className="footer-contact">

<p><FaPhoneAlt/> +91 9876543210</p>
<p><FaEnvelope/> info@metrospace.com</p>
<p><FaMapMarkerAlt/> Chennai, Tamil Nadu</p>

</div>

<div className="footer-social">

<a href="/"><FaFacebookF/></a>
<a href="/"><FaInstagram/></a>
<a href="/"><FaLinkedinIn/></a>
<a href="https://wa.me/919876543210"><FaWhatsapp/></a>

</div>

</div>


{/* PROJECT GALLERY */}

<div className="footer-col">

<h3>Our Projects</h3>

<div className="footer-gallery">

<img src="/images/1.jpg" alt="project"/>
<img src="/images/2.jpg" alt="project"/>
<img src="/images/3.jpg" alt="project"/>
<img src="/images/4.jpg" alt="project"/>
<img src="/images/4.jpg" alt="project"/>
<img src="/images/2.jpg" alt="project"/>

</div>

</div>


{/* LOCATION MAP */}

<div className="footer-col">

<h3>Visit Our Office</h3>

<div className="footer-map">

<iframe
title="metrospace-map"
src="https://www.google.com/maps?q=Chennai%20Tamil%20Nadu&output=embed"
loading="lazy"
></iframe>

</div>

</div>

</div>


{/* FOOTER BOTTOM */}

<div className="footer-bottom">

<p>© 2026 Metrospace Interiors. All rights reserved.</p>

</div>

</footer>

)

}

export default Footer