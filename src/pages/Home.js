import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts';
import Hero from '../components/Hero'
import Services from '../components/Services';
import Trusted from '../components/Trusted';
import { useProduct } from '../context/productContext';

const Home = () => {

  const heading = "E-com store";

  const value = useProduct();
  console.log(value.products)

  return (
    <>
      <Hero heading={heading} />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>
  )
}

export default Home