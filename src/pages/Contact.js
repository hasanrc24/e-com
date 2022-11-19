import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Section className='total-center'>
      <h2 className='contact-heading'>Contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.10978523504!2d90.39754217319148!3d23.783142514675657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76cf7ff1085%3A0xc7380491877aaf8b!2zU2VjdG9yIGNvcnBvcmF0aW9uIEhvdXNpbmcgY29tcGxleCwgMDIg4Kaw4KeL4KahIOCmqOCmgiDgp6gsIOCmouCmvuCmleCmviAxMjEy!5e0!3m2!1sbn!2sbd!4v1668578487219!5m2!1sbn!2sbd" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <form action="https://formspree.io/f/xpznbyyy" method="POST" className='contact-form'>
        <input type="text" placeholder='Name' autoComplete='off' required />
        <input type="text" placeholder='E-mail' autoComplete='off' required />
        <textarea name="Message" placeholder='Your Message' cols="20" rows="8" autoComplete="off" required></textarea>
        <input type="submit" value="Send" className="btn" />
      </form>
    </Section>
  )
}

const Section = styled.section`
    margin: 2rem 0 0 0 !important;
    .contact-heading{
      margin: 0 0 2rem 0 !important;
    }
    .contact-form{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 35%;
      margin: auto;
      padding: 2rem 0;
      input,textarea{
        padding: 0.7rem;
      }
      input[type="submit"]{
        cursor: pointer;
        margin-right: auto !important;
      }
      .btn{
        padding: 9px 2rem;
      }
    }
    @media(max-width: ${({theme}) => theme.media.mobile}){
      .contact-form{
        max-width: 65%;
      }
    }
`

export default Contact