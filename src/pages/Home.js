import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services';

const Home = () => {

  const heading = "E-com store";
  return (
    <>
      <Hero heading={heading} />
      <Services />
    </>
  )
}

export default Home