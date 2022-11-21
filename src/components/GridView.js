import React from 'react'
import styled from 'styled-components';
import Product from './Product';

const GridView = ({toFilterProducts}) => {
  return (
    <Section>
      <div className='grid grid-three-column prod-bg'>
            {
                toFilterProducts?.map((curProduct) => {
                    return <Product product={curProduct} key={curProduct.id} />
                })
            }
        </div>
        </Section>
  )
};
const Section = styled.section`
    .grid{
        gap: 5px;
    }
    @media(max-width: ${({theme}) => theme.media.mobile}){
        .grid-three-column{
            grid-template-columns: repeat(1,1fr);
        }
    }
`

export default GridView;