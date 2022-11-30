import React from "react";
import styled from "styled-components";
import { useProduct } from "../context/productContext";
import Product from "./Product";

const FeaturedProducts = () => {
  const { featuredProducts, loading } = useProduct();
  return (
    <Section>
      <h5>CHECK NOW</h5>
      <h2>Our featured products</h2>
      {loading ? (
        <div className="total-center">Loading...</div>
      ) : (
        <div className="grid grid-three-column">
          {featuredProducts?.map((prod) => {
            return <Product product={prod} key={prod.id} />;
          })}
        </div>
      )}
    </Section>
  );
};

const Section = styled.section`
  max-width: 100%;
  margin: auto;
  padding: 4rem 18%;
  background-color: ${({ theme }) => theme.colors.bg};
  h5 {
    color: ${({ theme }) => theme.colors.btn};
  }
  h2 {
    color: ${({ theme }) => theme.colors.text};
    padding: 0.8rem 0;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-three-column {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default FeaturedProducts;
