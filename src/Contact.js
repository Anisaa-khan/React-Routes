import React from 'react'

const Contact = () => {
  return (
    <>
       <div className='Contact' >
      <h2>Feel Free to Contact Us</h2>  </div>
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26532.369610564438!2d72.35289933000207!3d33.77239068883614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df183442f6da9b%3A0xa1703d36bc45f237!2sAttock%20Cantt.%2C%20Attock%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1701616858555!5m2!1sen!2s" 
      width="100%" height="400" style={{ border: 0  }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
     <div className="container">
      <div className="container-form">
        <form action="#" method='post' className='contact-form'>
<input type="text" name='username' placeholder='username' autoComplete='off' required />
<input type="Email" name='Email' placeholder='Email' autoComplete='off' required/>
<textarea name="message" placeholder='message'  cols="30" rows="5" autoComplete='off' required></textarea>
<button className='btn-hireme' style={{width:"100px", fontSize:"18px", fontWeight:"600", margin:"auto"}}>Send</button>
        </form>
      </div>
     </div>
    
    </>
 
  )
}

export default Contact
