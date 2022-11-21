import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListView = ({toFilterProducts}) => {

  console.log(toFilterProducts)
  return (
    <Section>
      {
        toFilterProducts?.map((curProd) => {
          const {name, description, image, price, id} = curProd;
          return (<div key={id} className="list-elem">
            <figure>
              <img src={image} alt={name} className="list-img" />
            </figure>
            <div className='list-info'>
              <h4>{name}</h4>
              <span>{price/100}</span>
              <p>{description.slice(0, 97)}...</p>
              <Link to={`/singleproduct/${id}`} className="btn">read more</Link>
            </div>
          </div>)
        })
      }
    </Section>
  )
};

const Section = styled.section`
  margin: 0 7rem 0 0;
  cursor: pointer;
.list-elem{
  border: 1px solid gray;
  margin: 1rem;
  padding: .5rem;
  border-radius: 5px;
  display: flex;
  gap: 2rem;
  overflow: hidden;
  .list-img{
    height: 10rem;
  }&:hover img{
    transition: all .3s ease;
    transform: scale(1.16);
  }
  .list-info{
    color: ${({theme}) => theme.colors.text};
    padding: 5px;
    h4{
      text-transform: capitalize;
      margin: 0 0 1rem 0;
    }
    p{
      margin: 0 0 12px 0;
    }
    
  }
}
  @media(max-width: ${({theme}) => theme.media.mobile}){
    margin: 0;
    .list-elem{
      flex-direction: column;
    }
  }

`

export default ListView;