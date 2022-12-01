import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { cart, handleClearCart, subtotal, shipping } = useCartContext();

  const titles = ["Item", "Price", "Quantity", "Subtotal", "Remove"];

  console.log(cart);
  return (
    <Section>
      {cart?.length === 0 || cart === null ? (
        <div className="total-center">
          Cart is empty <br />
          <br />{" "}
          <Link to="/products" className="btn">
            Shop now
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-five-column total-center">
            {titles?.map((curTitle, i) => {
              return (
                <p className="title" key={i}>
                  {curTitle}
                </p>
              );
            })}
          </div>
          <hr />
          <div>
            {cart?.map((curElem) => {
              return <CartItem cart={curElem} key={curElem.id} />;
            })}
          </div>
          <hr />
          <div className="flex justify-between">
            <Link to="/products" className="btn">
              continue shopping
            </Link>
            <button className="btn clr" onClick={handleClearCart}>
              clear cart
            </button>
          </div>
          <div className="flex justify-between">
            <div></div>
            <div className="fee-right">
              <div className="flex justify-between">
                <p>Subtotal: </p>
                <p>${(subtotal / 1000).toFixed(2)}</p>
              </div>
              <div className="flex justify-between mid">
                <p>Shipping fee: </p>
                <p>${(shipping / 1000).toFixed(2)}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Total cost: </p>
                <p>${((shipping + subtotal) / 1000).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

const Section = styled.section`
  margin: auto;
  width: 65%;
  padding: 2rem 0 1rem 0;
  .title {
    color: ${({ theme }) => theme.colors.text};
  }
  hr {
    margin: 0.5rem auto;
  }
  .color-class {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }
  .clr {
    background-color: #e31626;
  }
  .fee-right {
    background-color: ${({ theme }) => theme.colors.bg};
    margin: 2rem 0 0 0;
    padding: 1rem;
    width: 13rem;
    .mid {
      margin: 8px 0;
    }
  }
`;

export default Cart;
