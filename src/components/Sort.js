import React from 'react'
import styled from 'styled-components';
import { IoGridSharp, IoList } from 'react-icons/io5';
import { useProduct } from '../context/productContext';

const Sort = () => {

  const {setGridView, setListView, gridView, toFilterProducts, setSort, sortBy} = useProduct();

console.log(sortBy)
  return (
    <Wrapper>
      <div className='left-sort'>
        <IoGridSharp className={gridView === true ? "sort-icon active" : "sort-icon"} onClick={()=> setGridView()} />
        <IoList className={gridView === false ? "sort-icon active" : "sort-icon"} onClick={()=> setListView()} />
      </div>
      <div className='length'>{toFilterProducts?.length} Total products</div>
      <div>
        <select id="sort-id" onClick={setSort}>
          <option value="highest">Price (highest)</option>
          <option value="lowest">Price (lowest)</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem .6rem;
.sort-icon{
    background-color: ${({theme}) => theme.colors.bg};
    font-size: 30px;
    cursor: pointer;
    margin: 0 5px;
    padding: .3rem;
  }
  .length{
    color: ${({theme}) => theme.colors.text};
  }
  .active{
    color: white;
    background-color: black;
  }
`

export default Sort