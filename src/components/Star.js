import React from 'react';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {FaStarHalfAlt} from "react-icons/fa";
import styled from 'styled-components';

const Star = ({stars,reviews}) => {

    const ratingStar = Array.from({length: 5}, (value, index) => {
        let number = index + 0.5;
        return(
            <span key={index}>
                {
                    stars >= index+1 ? <AiFillStar /> : stars >= number ? <FaStarHalfAlt /> : <AiOutlineStar />
                }
            </span>
        )
    })
  return (
    <Wrapper>
        <div className='stars-class'>
            {ratingStar}
        </div>
        <h5>{reviews} Reviews</h5>
    </Wrapper>
  )
};
const Wrapper = styled.div`

    .stars-class{
        color: #FDCC0D;
    }
`

export default Star