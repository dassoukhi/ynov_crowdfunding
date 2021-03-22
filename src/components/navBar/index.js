import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import logo from './logo.svg'

const NavbarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  & > * > * {
    font-weight: 600;
    margin: 0px 5px;
    font-size: 17px;
    text-decoration: none;
    color: black;

    & :hover {
      color: #e51075;
    }
  }
`

const Button = styled.button`
  background-color: white;
  border: none;

  & :hover {
    color: #e51075;
  }
`
const spanLogin = styled.span`
  border: '1px solid lightgrey';
  width: '0px';
`

const stylediv = styled.div`
  display: flex;
  flex-direction: row;
`
const Navbar = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')
  const handleLogout = () => {
    //delete all localStorage when I logout and push it into login page
    localStorage.clear()
    history.push('/')
  }
  return (
    <stylediv>
      <NavbarStyle>
        <div>
          <img src={logo} alt='' height='150%' />
        </div>
        <div>
          <spanLogin />
          <Button onClick={() => null}>Explorer</Button>
        </div>
        <div>
          <spanLogin />
          {isToken ? (
            <Button onClick={handleLogout}>Se déconnecter</Button>
          ) : null}
        </div>
      </NavbarStyle>
    </stylediv>
  )
}

export default Navbar
