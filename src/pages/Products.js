import React from 'react'
import styled from 'styled-components';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';

const Products = () => {
  return (
    <Section>
      <div className='prd'>
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
      </div>
    </Section>
  )
};

const Section = styled.section`
  margin: auto;
  width: 71%;
  .prd{
    display: grid;
    grid-template-columns: .2fr 1fr;
    gap: 1rem !important;
  }
  @media(max-width: ${({theme}) => theme.media.mobile}){
    .prd{
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default Products