import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const Home = () => {

  const heading = "E-com store";
  return (
    <>
      <Hero heading={heading} />
      <Services />
      <Trusted />
    </>
  )
}

export default Home