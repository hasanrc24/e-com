import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ product }) => {
  const { id, image, name, price, category } = product;
  const url = window.location.pathname;
  const compare = url === "/products";
  const gray = compare ? "#F6F8FA" : "white";
  return (
    <Wrapper className="total-center" style={{ backgroundColor: gray }}>
      <Link to={`/singleproduct/${id}`} className="prod-link">
        <figure>
          <img src={image} alt={product.id} />
          <figcaption>{category}</figcaption>
        </figure>
        <div className="flex justify-between details">
          <p>{name}</p>
          <p>${(price / 1000).toFixed(2)}</p>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 13rem;
  width: 16rem;
  text-decoration: none !important;
  .prod-link {
    text-decoration: none;
    .details {
      color: ${({ theme }) => theme.colors.text};
      padding: 7px 14px;
      text-transform: capitalize;
      p {
        text-decoration: none;
      }
    }
  }
  &:hover img {
    transition: all 0.3s ease;
    transform: scale(1.2);
  }
  img {
    margin: 0.7rem 0 0 0;
    height: 9.7rem;
  }
  figure {
    position: relative;
    overflow: hidden;
    figcaption {
      position: absolute;
      top: 10%;
      right: 7%;
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.bg};
      padding: 6px 10px;
      border-radius: 14px;
    }
  }
`;

export default Product;
