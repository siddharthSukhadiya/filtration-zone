import React, { useRef, useState } from 'react'
import './styles/contactUs.css'
import { MdAddIcCall, MdMail, MdLocationOn } from 'react-icons/md'
import formSideImg from '../assets/contactUs/form-side-img.jpg'

const ContactUs = () => {
    const form = useRef()

    const [isLoading, setLoading] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault()
        setLoading(true)

        const emailData = {
            template_params: {
                name: e.target.name.value,
                email: e.target.email.value,
                number: e.target.number.value,
                subject: e.target.subject.value,
                message: e.target.message.value
            }
        }

        try {
            console.log('Email Data :', emailData)
            // await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData)
            alert('Thank you for reaching out! We’ve received your message and will get back to you shortly.')
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    return (<div id='contact-us'>
        <section className='hero-banner'>
            <div className='blur-back-dark'>
                <div className='container'>
                    <h2>Contact Us</h2>
                </div>
            </div>
        </section>
        <section className='contact-us-section'>
            <div className='container'>
                <section className='contact-box'>
                    <div className='box'>
                        <div className='icon'><MdAddIcCall /></div>
                        <div className='details'>
                            <p className='title'>Call Anytime</p>
                            <p className='data'>(+91) 98765 43210</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'><MdMail /></div>
                        <div className='details'>
                            <p className='title'>Online Support</p>
                            <p className='data'>support@filtration.com</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'><MdLocationOn /></div>
                        <div className='details'>
                            <p className='title'>Our Location</p>
                            <p className='data'>Ahmadabad, <br /> Gujarat, 370001</p>
                        </div>
                    </div>
                </section>
                <section className='contact-form'>
                    <img src={formSideImg} alt='form-side-img' />
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='inputGroup'>
                            <input type='text' autoComplete='off' id='name' required disabled={isLoading} />
                            <label htmlFor='name'>Enter Your Name</label>
                        </div>
                        <div className='inputGroup'>
                            <input type='text' autoComplete='off' id='email' required disabled={isLoading} />
                            <label htmlFor='email'>Enter Your Email</label>
                        </div>
                        <div className='inputGroup'>
                            <input type='text' autoComplete='off' id='number' required disabled={isLoading} />
                            <label htmlFor='number'>Enter Your Phone Number</label>
                        </div>
                        <div className='inputGroup'>
                            <input type='text' autoComplete='off' id='subject' required disabled={isLoading} />
                            <label htmlFor='subject'>Enter Your Subject</label>
                        </div>
                        <div className='inputGroup'>
                            <textarea id='message' required disabled={isLoading} />
                            <label htmlFor='message'>Enter Your Message</label>
                        </div>
                        <button disabled={isLoading}>SUBMIT</button>
                    </form>
                </section>
            </div>
        </section>
    </div>)
}

export default ContactUs