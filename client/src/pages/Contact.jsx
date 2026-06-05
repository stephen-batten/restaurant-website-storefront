import React, { useState } from 'react'
import ContactBanner from '../assets/contactUs.jpg'
import '../styles/Contact.css'
import axios from 'axios'

function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const [formHandler, setFormHandler] = useState('')

  const axiosPostData = async() => {
    try {
      const postData = {
        action: 'send',
        firstName: firstName,
        lastName: lastName,
        email: email,
        feedback: feedback
      }

      const apiURL = process.env.REACT_APP_API_URL

      const res = await axios.post(`${apiURL}/contact`, postData)

      setFormHandler(
        <p className='success-message'>{res.data}</p>
      )

    } catch (err) {
      setFormHandler(
        <p className='error-message'>{err.response?.data || 'An error has occured.'}</p>
      )
    }
  }





  const handleSubmit = (e) => {
    e.preventDefault()

    if (!firstName) {
      setFormHandler(<p className='error-message'>Name field is empty. Please type your name.</p>)
      return
    }
    
    if (!lastName) {
      setFormHandler(<p className='error-message'>Last name field is empty. Please type your last name.</p>)
      return
    } 
    
    if (!email) {
      setFormHandler(<p className='error-message'>Email field is empty. Please type your email.</p>)
      return
    } 
    
    if (!feedback) {
      setFormHandler(<p className='error-message'>Feedback field is empty. Please type a message.</p>)
      return
    } 
    
    axiosPostData()
  }

  return (
    <div className='contact'>
        <div className='left-side' style={{ backgroundImage: `url(${ContactBanner})` }}></div>
        <div className='right-side'>
            <h1>Contact Us</h1>

            <form id='contact-form' method='POST'>
                <label htmlFor='firstname'>First Name</label>
                <input type='text' name='firstname' id='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name...' required/>
                
                <label htmlFor='lastname'>Last Name</label>
                <input 
                  type='text' 
                  autoComplete='off'
                  name='lastname' 
                  id='lastname' 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                  placeholder='Last Name...' 
                  required
                />
                
                <label htmlFor='email'>Email Address</label>
                <input 
                  type='email'
                  autoComplete='off' 
                  pattern="^[^@]+@[^@]+\.(ca|com)$"
                  name='email' 
                  id='email' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='E-mail Address...' 
                  required
                />
                
                <label htmlFor='feedback'>Feedback</label>
                <textarea name='feedback' id='feedback' maxLength='255' onChange={(e) => setFeedback(e.target.value)} placeholder='Your Feedback...' required></textarea>

                {formHandler}
                
                <button type='submit' value='submit' onClick={(e) => handleSubmit(e)}>Submit Feedback</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
