import React from 'react'
import styled from 'styled-components';
import { useProduct } from '../context/productContext'
import Product from './Product';

const ProductList = () => {

    const {products} = useProduct();
    console.log(products)
  return (
    <Section>
        <div className='grid grid-three-column'>
            {
                products?.map((curProduct) => {
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

export default ProductList