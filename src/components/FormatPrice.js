import React from 'react'

const FormatPrice = ({price}) => {

    // const formattedPrice = new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD',  maximumSignificantDigits: 2}).format(price/1000);
    const formattedPrice = (price/1000).toFixed(2);
    return (
    <span>${formattedPrice}</span>
  )
}

export default FormatPrice;