import React from 'react'
import styled from 'styled-components';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';

const Products = () => {
  return (
    <Section className='container grid grid-filter'>
      <div >
        <Filter />
      </div>
      <div>
        <div>
          <Sort />
        </div>
        <div>
          <ProductList />
        </div>
      </div>
    </Section>
  )
};

const Section = styled.section`
  max-width: 72%;
  grid-template-columns: .3fr 1fr;
`

export default Products