import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImage = ({image}) => {
    
    const [mainImg, setMainImg] = useState(image ? image[0] : []);
  return (
    <Section>
        <div className='left-side'>
            {
                image?.map((img) => {
                    return <figure key={img.id}>
                        <img src={img.url} alt={img.filename} onClick={() => setMainImg(img)} />
                    </figure>
                })
            }
        </div>
        <div className='right-side'>
            <figure>
                <img src={mainImg.url} alt={mainImg.filename} />
            </figure>
        </div>
    </Section>
  )
}

const Section = styled.section`
display: flex;
gap: 1rem;
align-items: center;
    .left-side{
        img{
            height: 100px;
            width: 170px;
            cursor: pointer;
        }
    }
    .right-side img{
        height: 180px;
    }
`

export default ProductImage