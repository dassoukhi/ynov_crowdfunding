import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: #800000;
  height: 85px;
  display: flex;

  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;

  @media screen and (max-width: 500px) {
    .navbar a {
      float: none;
      display: block;
      width: 100%;
    }
  }
  /* @media screen and (max-width: 500px) {
    height: 100%;
    width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    flex-direction: column;
  } */
`
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  width: 100%;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavMenu2 = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  justify-content: flex-start;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: white;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: white;
  }
`
