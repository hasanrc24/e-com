import React from 'react'
import styled from 'styled-components';

const ProductAmount = ({setIncrease, setDecrease, amount}) => {
  return(<Wrapper>
    <button onClick={() => setDecrease()}>-</button>
    <p>{amount}</p>
    <button onClick={() => setIncrease()}>+</button>
    </Wrapper>
  )
};

const Wrapper = styled.div`
    display: flex;
`

export default ProductAmount