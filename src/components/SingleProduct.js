import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useProduct } from '../context/productContext';
import ProductImage from './ProductImage';
import Star from './Star';

const api = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {

    const {id} = useParams();
    const {getSingleProduct, singleLoading, singleProduct} = useProduct();

    const {category, company, description, name, image, id: alias, price, reviews, stars, stock} = singleProduct;
    useEffect(() => {
        getSingleProduct(`${api}?id=${id}`);
    }, []);
  return (
    <Wrapper>
        {
            singleLoading ? <p className='total-center'>Loading</p> : 
            <div className='container grid grid-two-column'>
              <div className='total-center'>
                <ProductImage image={image} />
              </div>
              <div className='prod-details'>
                <h3>{name}</h3>
                <Star stars={stars} reviews={reviews} />
                <p>Price: <span>{'\u09F3'}{price/10}</span></p>
                <p>{description}</p>
                <h5>Available: {stock > 0 ? "In Stock" : "Not Available"}</h5>
                <h5 >Brand: {company}</h5>
              </div>
            </div>
        }
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 3rem 9rem;
  color: ${({theme}) => theme.colors.text};
  .prod-details{
    display: flex;
    flex-direction: column;
    gap: .7rem;
    span{
      font-weight: bold;
    }
    h3, h5{
      text-transform: capitalize;
    }
  }
`

export default SingleProduct