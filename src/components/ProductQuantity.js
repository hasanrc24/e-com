import React from 'react';
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ProductQuantity = ({setIncrease, setDecrease, quantity}) => {

  const location = window.location.pathname;
  return(<Wrapper>
    <div className={location === '/cart' ? "quantity-mod" : "quantity-mod marg"}>
      <button onClick={() => setDecrease()}><AiOutlineMinus /></button>
      <p>{quantity}</p>
      <button onClick={() => setIncrease()}><AiOutlinePlus /></button>
    </div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  .quantity-mod{
    display: flex;
    gap: 1rem;
    font-size: 17px;
  }
  button{
    border: none;
    background-color: none;
    cursor: pointer;
    padding: 3px;
  }
  .marg{
    margin: 1rem 0 2rem 0;
  }
`

export default ProductQuantity;