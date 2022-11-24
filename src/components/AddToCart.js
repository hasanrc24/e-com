import React, { useState } from 'react';
import styled from 'styled-components';
import { GoCheck } from 'react-icons/go';
import ProductQuantity from './ProductQuantity';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const AddToCart = ({id, colors, stock, singleProduct}) => {

    const {addToCart} = useCartContext();

    const [selectColor, setSelectColor] = useState(colors[0]);
    const [quantity, setQuantity] = useState(1);
    const setDecrease = () =>{
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    }
    const setIncrease = () => {
        quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
    }
  return (
    <Wrapper>
        <div className='tick'>Colors: {
            colors?.map((curColor, i) => {
                return <button key={i} className="color-class" style={{backgroundColor: curColor}} onClick={() => setSelectColor(curColor)}>{selectColor === curColor && <GoCheck className='color-check' />}</button>
            })
        }</div>
        <ProductQuantity quantity={quantity} setDecrease={setDecrease} setIncrease={setIncrease} />
        <button className='btn' onClick={() => addToCart(id, selectColor, quantity, singleProduct)}>add to cart</button>
    </Wrapper>
  )
};

const Wrapper = styled.div`
    .tick{
        display: flex;
    }
    .color-class{
        border: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin: 2px;
        cursor: pointer;

        .color-check{
            color: #fff;
        }

    }
`

export default AddToCart;