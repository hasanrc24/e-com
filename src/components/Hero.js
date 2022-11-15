import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Hero = ({heading}) => {
  return (
    <Main>
        <div className='container'>
          <div className='grid res-grid grid-two-column '>
            <div className='m-auto hero-left'>
              <p className='hero-wel'>Welcome to</p>
              <h1 className='hero-h1'>{heading}</h1>
              <p className='hero-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.</p>
              <Link to="/products" className='btn'>Shop now</Link>
            </div>
            <div>
              <figure>
                <img src="./images/hero-shopping.webp" alt='hero' className='hero-img' />
              </figure>
            </div>
          </div>
        </div>
    </Main>
  )
}

const Main = styled.main`
  margin: 2.5rem 0;

  .hero-left{
    padding-left: 13rem;
  }
  .hero-img{
    width: 75%;
  }
  .hero-h1{
    padding: 8px 0;
  }
  .hero-p{
    padding-bottom: 20px;
    color: gray;
  }
  .hero-wel{
    text-transform: uppercase;
    color: gray;
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}){
    .res-grid{
      grid-template-columns: repeat(1, 1fr) !important;
    }
    .hero-left{
      padding-left: 0;
      text-align: center;
    }
    figure{
      text-align: center;
    }
  }

`

export default Hero;