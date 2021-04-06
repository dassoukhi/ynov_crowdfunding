import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: #800000;
  height: 85px;
  display: flex;
  width: 100%;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;

  @media screen and (max-width: 500px) {
    .navbar a {
      float: none;
      display: block;
      width: 100%;
    }
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
  @media screen and (max-width: 769px) {
    display: none;
  }
`
export const DivLink = styled.div`
  width: 100%;

  display: block;
  position: absolute;
  text-align: right;

  @media screen and (min-width: 769px) {
    display: none;
  }
`
export const DivLink2 = styled.div`
  padding-left: -10px;
  @media screen and (max-width: 769px) {
    display: none;
  }
`
export const NavMenu2 = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  justify-content: flex-start;
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 769px) {
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
export const Button = styled.button`
  background-color: white;
  background: #3897f0;
  padding: 0 8px;
  background: #3897f0;
  border: 1px solid #3897f0;
  color: #fff;
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  height: 28px;
  line-height: 26px;
  outline: none;
  white-space: nowrap;
  font: inherit;

  border: none;
  color: black;

  & :hover {
    color: #e51075;
  }
`

export const ButLang = styled.button`
  background-color: none;
  color: white;
  border: none;
  border-style: none;
  outline: none;
  background-color: transparent;
  padding: 10px;
`
