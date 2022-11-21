import React from 'react'
import styled from 'styled-components';
import { useProduct } from '../context/productContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

    const {toFilterProducts, gridView,products} = useProduct();
    // console.log(toFilterProducts);
  return (
    <Section>
      {
        ((products?.length === 0) && <p className='total-center'>Loading...</p>) || ((toFilterProducts?.length === 0) && <p className='total-center'>No match found</p>)
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