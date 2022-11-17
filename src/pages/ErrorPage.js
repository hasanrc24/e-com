import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>Page not found</h1>
      <Link to="/" className='btn'>Home</Link>
    </Wrapper>
  )
};
const Wrapper = styled.div`
  margin: auto;
  text-align: center;
  h1{
    padding: 2rem 0;
  }
`

export default ErrorPage