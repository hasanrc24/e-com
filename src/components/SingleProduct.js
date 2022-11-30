import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProduct } from "../context/productContext";
import AddToCart from "./AddToCart";
import ProductImage from "./ProductImage";
import Star from "./Star";

const api = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, loading, singleProduct } = useProduct();

  const {
    company,
    description,
    name,
    image,
    price,
    reviews,
    stars,
    stock,
    colors,
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${api}?id=${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(name, price, "single");

  return (
    <Wrapper>
      {loading ? (
        <p className="total-center">Loading...</p>
      ) : (
        <div className="container grid grid-two-column">
          <div className="total-center">
            <ProductImage image={image} />
          </div>
          <div className="prod-details">
            <h3>{name}</h3>
            <Star stars={stars} reviews={reviews} />
            <p>Price: ${(price / 1000).toFixed(2)}</p>
            <p>{description}</p>
            <h5>Available: {stock > 0 ? "In Stock" : "Not Available"}</h5>
            <h5>Brand: {company}</h5>
            <hr />
            {stock > 0 && (
              <AddToCart
                id={id}
                colors={colors}
                stock={stock}
                singleProduct={singleProduct}
              />
            )}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 3rem 9rem;
  color: ${({ theme }) => theme.colors.text};
  .prod-details {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    span {
      font-weight: bold;
    }
    h3,
    h5 {
      text-transform: capitalize;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 2rem 0;
    .grid-two-column {
      grid-template-columns: repeat(1, 1fr);
    }
    .container {
      padding: 0;
    }
    .prod-details {
      padding: 1rem;
    }
  }
`;

export default SingleProduct;
