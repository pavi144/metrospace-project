import React, { useState } from "react"
import API from "../services/api";


function ConsultationForm(){

const [form,setForm] = useState({
name:"",
phone:"",
email:"",
location:"",
message:""
})

const [loading,setLoading] = useState(false)
const [success,setSuccess] = useState(false)
const [error,setError] = useState("")

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const validateForm=()=>{

if(!form.name || !form.phone || !form.email || !form.location || !form.message){
setError("Please fill all required fields")
setSuccess(false)
return false
}

if(!/\S+@\S+\.\S+/.test(form.email)){
setError("Invalid email format")
setSuccess(false)
return false
}

if(form.phone.length < 10){
setError("Phone number must be at least 10 digits")
setSuccess(false)
return false
}

setError("")
return true
}

const handleSubmit = async(e)=>{

e.preventDefault()

setError("")
setSuccess(false)

if(!validateForm()) return

setLoading(true)

try{

await API.post("/consultation/",form)

setSuccess(true)

setForm({
name:"",
phone:"",
email:"",
location:"",
message:""
})

setTimeout(()=>{
setSuccess(false)
},3000)

}catch(err){

if(err.response?.data?.phone){
setError(err.response.data.phone[0])
}
else{
setError("There was an error submitting the form. Please try again.")
}

setSuccess(false)

}

setLoading(false)

}

return(

<section id="consultation" className="consultation-section">

<div className="consultation-wrapper">

<div className="consult-info">

<h2>Book Your Free Design Consultation</h2>

<p className="consult-sub">
Tell us about your dream space and our expert designers will
contact you within 24 hours.
</p>

<div className="consult-features">

<div className="feature">
<span>✓</span>
<p>Free Design Consultation</p>
</div>

<div className="feature">
<span>✓</span>
<p>Premium Quality Materials</p>
</div>

<div className="feature">
<span>✓</span>
<p>8+ Years Interior Experience</p>
</div>

<div className="feature">
<span>✓</span>
<p>Modern Space Planning</p>
</div>

</div>


{/* CONTACT DETAILS */}

<div className="consult-contact">

<div className="contact-item">
<span className="contact-icon">📞</span>
<div>
<strong>Call Us</strong>
<p>+91 98765 43210</p>
</div>
</div>

<div className="contact-item">
<span className="contact-icon">✉️</span>
<div>
<strong>Email</strong>
<p>info@metrospace.com</p>
</div>
</div>

<div className="contact-item">
<span className="contact-icon">📍</span>
<div>
<strong>Office</strong>
<p>Chennai, Tamil Nadu</p>
</div>
</div>

</div>

</div>




<form className="consult-form" onSubmit={handleSubmit}>

<h3>Start Your Project</h3>

<input
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
/>

<input
name="phone"
placeholder="Phone Number"
value={form.phone}
onChange={handleChange}
/>

<input
name="email"
placeholder="Email Address"
value={form.email}
onChange={handleChange}
/>

<input
name="location"
placeholder="Your Location"
value={form.location}
onChange={handleChange}
/>

<textarea
name="message"
placeholder="Tell us about your project"
value={form.message}
onChange={handleChange}
/>

<button disabled={loading}>
{loading ? "Submitting..." : "Submit Request"}
</button>

{success && <p className="success">Consultation submitted successfully</p>}
{error && <p className="error">{error}</p>}

</form>

</div>

</section>

)

}

export default ConsultationForm