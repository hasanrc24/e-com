import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useProduct } from '../context/productContext';

const api = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {

    const {id} = useParams();
    const {getSingleProduct, singleLoading, singleProduct} = useProduct();

    console.log(singleProduct)
    useEffect(() => {
        getSingleProduct(`${api}?id=${id}`);
    }, []);
  return (
    <Wrapper>
        {
            singleLoading ? <p className='total-center'>Loading</p> : "SingleProduct"
        }
        
    </Wrapper>
  )
}

const Wrapper = styled.section`

`

export default SingleProduct