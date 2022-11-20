import React from 'react'
import styled from 'styled-components';
import { useProduct } from '../context/productContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

    const {products, gridView} = useProduct();
  return (
    <Section>
      {
        (products?.length === 0) && <p>Loading...</p> 
      }
        <div>
            {
                gridView === true ? <GridView products={products} /> : <ListView products={products} />
            }
        </div>
    </Section>
  )
};

const Section = styled.section`
    
`

export default ProductList