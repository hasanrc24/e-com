import React from 'react'
import styled from 'styled-components';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiShieldUserFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Services = () => {
  return (
    <Section className='container'>
        <div className='flex justify-center ser'>
            <div className='service-1 total-center'>
                <div>
                    <TbTruckDelivery className='service-icon' />
                    <p>Super fast and free delivery</p>
                </div>
            </div>
            <div className='service-2'>
                <div className='service-2-1 flex items-center justify-center'>
                    <RiShieldUserFill className='service-icon' />
                    <p>Non-contact shipping</p>
                </div>
                <div className='service-2-2 flex items-center justify-center'>
                    <GiReceiveMoney className='service-icon' />
                    <p>Money-back guarantee</p>
                </div>
            </div>
            <div className='service-3 total-center'>
                <div>
                    <RiSecurePaymentFill className='service-icon' />
                    <p>Super secure payment method</p>
                </div>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    width: 75%;
    .service-1,
    .service-3{
        background-color: #F6F8FA;
        border-radius: 13px;
        width: 17rem;
        height: 14rem;
        display: flex;
        align-items: center;
        justify-content: center
    }
    .service-2{
        .service-2-1,
        .service-2-2{
            background-color: #F6F8FA;
            border-radius: 13px;
            height: 6.2rem;
            width: 18rem;
            margin: 1.5rem 0;
        }
    }
    .service-icon{
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.4rem;
        border-radius: 50%;
        color: ${({theme}) => theme.colors.btn};
        background-color: #fff;
    }
    @media(max-width: ${({ theme }) => theme.media.mobile}){
        .ser{
            flex-direction: column;
        }
    }
`

export default Services;