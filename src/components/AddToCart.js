import React, { useState } from 'react';
import styled from 'styled-components';
import { GoCheck } from 'react-icons/go';
import ProductAmount from './ProductAmount';

const AddToCart = ({colors, stock}) => {

    const [selectColor, setSelectColor] = useState(colors[0]);

    const [amount, setAmount] = useState(1);

    const setDecrease = () =>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

  return (
    <Wrapper>
        <div className='tick'>Colors: {
            colors?.map((curColor, i) => {
                return <button key={i} className="color-class" style={{backgroundColor: curColor}} onClick={() => setSelectColor(curColor)}>{selectColor === curColor && <GoCheck className='color-check' />}</button>
            })
        }</div>
        <ProductAmount amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
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

        .color-check{
            color: #fff;
        }

    }
`

export default AddToCart;