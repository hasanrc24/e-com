import React from 'react'
import styled from 'styled-components';
import { BsDiscord } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Section>
        <div className='flex justify-between talk-part total-center'>
            <h5>Ready to get started? <br/> Talk to us today</h5>
            <Link to="/contact" className='btn'>get started</Link>
        </div>

        <footer>
            <div className='flex justify-center'>
                <div>
                    <h5>E-com</h5>
                    <p>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.</p>
                </div>
                <div>
                    <h5>Subscribe to get important updates</h5>
                    <form>
                        <input type="text" placeholder="Your e-mail" className='form-inp' /> <br />
                        <input type="submit" className="btn" />
                    </form>
                </div>
                <div>
                    <h5>Follow us</h5>
                    <div className='flex'>
                        <BsDiscord />
                        <BsLinkedin />
                        <BsInstagram />
                    </div>
                </div>
                <div>
                    <h5>Call us</h5>
                    <p>+8801774097909</p>
                </div>
            </div>

            <div>
                <hr />
                <div className='flex justify-evenly'>
                    <h6>@{new Date().getFullYear()} E-com All Rights Reserved</h6>
                    <h6>Privacy Policy <br /> Terms & conditions</h6>
                </div>
            </div>
        </footer>
    </Section>
  )
}

const Section = styled.section`
    .talk-part{
        background-color: ${({theme}) => theme.colors.bg};
        max-width: 50rem;
        padding: 2.5rem;
        border-radius: 10px;
        transform: translateY(50%);
    }
    footer{
        background-color: ${({theme}) => theme.colors.footer_bg};
        color: white;
        padding: 6rem 0 3rem 0;
        .justify-center{
            gap: 2rem;
        }
        form{
            .form-inp{
                padding: 8px;
                border-radius: 3px;
                border: none;
                margin: 1rem 0;
            }
        }
        h5{
            margin: 0 0 1rem 0 ;
        }
        hr{
            width: 100%;
            margin: 3rem 0 3rem 0;
        }
    }
    @media(max-width: ${({theme}) => theme.media.mobile}){
        .talk-part{
            max-width: 27rem;
        }
    }
`

export default Footer;