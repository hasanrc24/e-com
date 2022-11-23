import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/cartContext';

const Cart = () => {

  const {cart, handleClearCart} = useCartContext();

  const titles = ["Item", "Price", "Quantity", "Subtotal", "Remove"];

  return (
    <Section>
      {
        cart?.length === 0 ? <div className='total-center'>Cart is empty <br /><br /> <Link to="/products" className='btn'>Shop now</Link></div> : <div>
        <div className='grid grid-five-column total-center'>
          {
            titles.map((curTitle, i) => {
              return <p className='title' key={i}>{curTitle}</p>
            })
          }
        </div>
        <hr />
        <div>
          {
            cart.map((curElem) => {
              return <CartItem cart={curElem} key={curElem.id} />
            })
          }
        </div>
        <hr />  
        <div className='flex justify-between'>
          <Link to="/products" className='btn'>continue shopping</Link>
          <button className='btn clr' onClick={handleClearCart}>clear cart</button>
        </div>
      </div>
      }
      
    </Section>
  )
};

const Section = styled.section`
  margin: auto;
  width: 65%;
  padding: 2rem 0 1rem 0;
  .title{
    color: ${({theme}) => theme.colors.text};
  }
  hr{
    margin: .5rem auto;
  }
  .color-class{
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }
  .clr{
    background-color: #e31626;
  }
`

export default Cart;