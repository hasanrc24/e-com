import React from 'react';
import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProductQuantity = ({setIncrease, setDecrease, quantity}) => {
  return(<Wrapper>
    <div className='quantity-mod'>
      <button onClick={() => setDecrease()}><AiOutlineMinus /></button>
      <p>{quantity}</p>
      <button onClick={() => setIncrease()}><AiOutlinePlus /></button>
    </div>
    <Link to="/cart" className='btn'>add to cart</Link>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  .quantity-mod{
    display: flex;
    gap: 1rem;
    margin: 1rem 0 2rem 0;
    font-size: 17px;
  }
    button{
      border: none;
      background-color: none;
      cursor: pointer;
      padding: 3px;
    }
`

export default ProductQuantity;