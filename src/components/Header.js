import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';

const Header = () => {
  return (
    <HeaderSection>
        <NavLink to="/">
            <img src='./images/logo.png' height="60rem" alt='logo' />
        </NavLink>
        <Nav />
    </HeaderSection>
  )
}

const HeaderSection = styled.header`
    padding: 0 2.8rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .logo {
    height: 5rem;
    }
`;
export default Header;