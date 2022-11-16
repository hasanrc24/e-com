import React from 'react'
import styled from 'styled-components'

const Trusted = () => {
  return (
    <Wrapper className='container total-center'>
        <h4>Trusted by 1000+ companies</h4>
        <div className='flex slide'>
            <div className='comp'>
                <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"
                />
            </div>
            <div className='comp'>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
            </div>
            <div className='comp'>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
            />
            </div>
            <div className='comp'>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
            />
            </div>
            <div className='comp'>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background-color: ${({theme}) => theme.colors.bg};
    margin: 2rem 0 !important;
    padding: 2rem 0 !important;

    .comp{
        img{
            max-width: 7rem;
        }
    }
    .slide{
        justify-content: space-evenly;
        margin: 2rem 0 1rem 0;
    }

    @media(max-width: ${({theme}) => theme.media.mobile}){
        .slide{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
`

export default Trusted;