import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }
  .flex{
    display: flex;
    gap: 1rem;
  }
  .justify-center{
    justify-content: center;
  }
  .justify-between{
    justify-content: space-between;
  }
  .items-center{
    align-items: center;
  }
  .m-auto{
    margin: auto;
  }
  .total-center{
    margin: auto;
    text-align: center;
  }
  .container {
    padding: 0 3rem;
    margin: 0 auto;
  }
  .grid {
    display: grid;
    gap: 2rem;
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  .grid-four-column{
     grid-template-columns: 1fr 1.2fr .5fr .8fr ;
  }
  .grid-five-column{
    grid-template-columns: repeat(5, 1fr);
  }
  .btn{
    text-decoration: none;
    text-transform: uppercase;
    background-color: ${({theme}) => theme.colors.btn};
    padding: .6rem;
    color: white;
    font-size: 15px;
    border-radius: 3px;
    border: none;
  }

`