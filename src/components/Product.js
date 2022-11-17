import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Product = ({product}) => {
    
    console.log(product);
    const {id, image, name, price, category} = product;
  return (
      <Wrapper className='total-center'>
            <Link to={`/singleproduct/${id}`} className="prod-link">
                <figure>
                    <img src={image} alt={product.id} />
                    <figcaption>{category}</figcaption>
                </figure>
                <div className='flex justify-between details'>
                    <p>{name}</p>
                    <p><span>{'\u09F3'} </span>{price/100}</p>
                </div>
            </Link>
        </Wrapper>
  )
};

const Wrapper = styled.div`
    background-color: white;
    height: 13rem;
    width: 16rem;
    text-decoration: none !important;
    .prod-link{
        text-decoration: none;
        .details{
            color: ${({theme}) => theme.colors.text};
            padding: 7px 14px;
            text-transform: capitalize;
            p{
                text-decoration: none;
            }
        }
    }&:hover img{
        transition: all .3s ease;
        transform: scale(1.2);
    }
    img{
        margin: .7rem 0 0 0;
        height: 9.7rem;
    }
    figure{
        position: relative;
        overflow: hidden;
        figcaption{
            position: absolute;
            top: 10%;
            right: 7%;
            color: ${({theme}) => theme.colors.text};
            background-color: ${({theme}) => theme.colors.bg};
            padding: 6px 10px;
            border-radius: 14px;
        }

    }
`

export default Product