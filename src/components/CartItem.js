import React from 'react'
import styled from 'styled-components';
import {AiFillDelete} from 'react-icons/ai';
import ProductQuantity from './ProductQuantity';
import { useCartContext } from '../context/cartContext';

const CartItem = ({cart}) => {

    const {name, image, color, price, quantity, id} = cart;
    const {handleRemoveItem} = useCartContext();
    
  return (
    <Wrapper className=''>
        <div className='flex'>
            <img src={image} alt={id} className="cart-img" />
            <div>
                <p>{name}</p>
                <div className='flex color-gap'>Color: <div className='color-class' style={{backgroundColor: color}}></div></div>
            </div>
        </div>
        <div>
            <p>{price/100}</p>
        </div>
        <div className='total-center'>
            <ProductQuantity quantity={quantity} />
        </div>
        <div>
            <p>{quantity * price/100}</p>
        </div>
        <div className='cart-del-icon'>
            <AiFillDelete className='cart-del-icon' onClick={() => handleRemoveItem(id)} />
        </div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 2rem 0;
    text-align: center;
    align-items: center;
    .cart-img{
        width: 3rem;
    }
    .cart-del-icon{
        font-size: 20px;
        color: #e31626;
        cursor: pointer;
    }
    .color-gap{
        gap: 5px;
    }
`

export default CartItem