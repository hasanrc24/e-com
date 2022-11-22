import React from 'react'
import styled from 'styled-components';
import { useProduct } from '../context/productContext';
import { GoCheck } from 'react-icons/go';

const Filter = () => {

  const {handleFilter, filters:{search, colors, price, maxPrice, category}, allCopyProducts, handleClearFilter} = useProduct();

  const prodCategory = (data, property) => {
    let cat = data.map((curProd) =>{
      return curProd[property];
    });
    if(property === "colors"){
      cat = cat.flat();
    }
    return cat = ["All", ...new Set(cat)];
  }

  const categories = prodCategory(allCopyProducts, "category");
  const companies = prodCategory(allCopyProducts, "company");
  const colorsData = prodCategory(allCopyProducts, "colors");


  return (
    <Section>
      <form onSubmit={(e)=> e.preventDefault()}>
        <input type="text" name="search" value={search} placeholder='Search' className='search' onChange={handleFilter} />
      </form>

      <div className='category'>
        <h3 className='category-title'>Categories</h3>
        {
          categories?.map((curCat, i) => {
            return <button type="button" key={i} className={category === curCat ? 'cat-btn active' : 'cat-btn'} name="category" value={curCat} onClick={handleFilter}>{curCat}</button>
          })
        }
      </div>
      <div className='category'>
        <h3 className='category-title'>Company</h3>
        <select name="company"  onClick={handleFilter}>
          {companies?.map((curCom, i) => {
            return <option key={i} value={curCom} name="company">{curCom}</option>
          })}
        </select>
      </div>

      <div className='category'>
        <h3 className='category-title'>Colors</h3>
        <div className='color-size'>
          {
            colorsData?.map((curColor, i) => {
              if(curColor.toLowerCase() === "all"){
                return <button key={i} className="color-all-btn" name="colors" value={curColor} onClick={handleFilter}>All</button>
              }
              return <button key={i} style={{backgroundColor: curColor}} className="color-btn flex items-center justify-center" name="colors" value={curColor} onClick={handleFilter}>{colors === curColor && <GoCheck style={{color: "white"}} />}</button>
            })
          }
        </div>
      </div>

      <div className='category'>
          <h3 className='category-title'>Price</h3>
          <h4>{'\u09F3'} {price}</h4>
          <input type="range" name="price" value={price} min="0" max={maxPrice} onChange={handleFilter} />
      </div>
      <div className='category'>
          <button className='btn' onClick={handleClearFilter}>Clear filters</button>
      </div>
    </Section>
  )
};

const Section = styled.section`
  margin: 1rem .6rem;
  .search{
    padding: 5px;
  }
    .category{
      color: ${({theme}) => theme.colors.text};
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 2rem 0 1rem 0;
      .category-title{
        margin: 0 0 .5rem 0;
      }
      .cat-btn{
        cursor: pointer;
        border: none;
        background-color: white;
        text-align: left;
        font-size: 15px;
        text-transform: capitalize;
      }
      .active{
        font-weight: bold;
      }
      .color-btn{
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        border: none;
        cursor: pointer;
      }
      .color-size{
        display: flex;
        gap: 8px;
      }
      .color-all-btn{
        background-color: inherit;
        border: none;
        cursor: pointer;
      }
      .btn{
        width: 9rem;
      }
  }
  @media(max-width: ${({theme}) => theme.media.mobile}){
    display: flex;
  }
`

export default Filter;