import React from 'react'
import styled from 'styled-components';
import { useProduct } from '../context/productContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

    const {toFilterProducts, gridView} = useProduct();
    // console.log(toFilterProducts);
  return (
    <Section>
      {
        (toFilterProducts?.length === 0) && <p>Loading...</p> 
      }
        <div>
            {
                gridView === true ? <GridView toFilterProducts={toFilterProducts} /> : <ListView toFilterProducts={toFilterProducts} />
            }
        </div>
    </Section>
  )
};

const Section = styled.section`
    
`

export default ProductList