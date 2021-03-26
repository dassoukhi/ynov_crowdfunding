import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import logoWhite from '../logo/BlackLogo.png'
import logoBlack from '../logo/WhiteLogo.png'
import { Link } from 'react-router-dom'

import './index.css'

const NavbarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  text-align: justify;
  float: center;
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
  const username = localStorage.getItem('username')
  const handleLogout = () => {
    //delete all localStorage when I logout and push it into login page
    localStorage.clear()
    history.push('/')
  }
  const addProject = () => {
    history.push('/compagne')
  }

  const isTheme = localStorage.getItem('theme')
  // if (isTheme === 'dark') {
  //   return true
  // }

  return (
    <stylediv>
      <NavbarStyle>
        {/* <div>
          <img src={logo} alt='' height='auto' />
        </div> */}
        <div>
          <div>
            <Link to={'/home'}>
              {isTheme === 'dark' ? (
                <img src={logoBlack} alt='' style={{ height: '150px' }} />
              ) : (
                <img src={logoWhite} alt='' style={{ height: '150px' }} />
              )}
            </Link>
          </div>
        </div>
        <div>
          <spanLogin />
          <Button onClick={() => null}>Explorer</Button>
        </div>
        <div>
          <spanLogin />
          <Button onClick={addProject}>Ajouter un projet</Button>
        </div>
        <div>
          <nav>
            <ul>
              <li className='deroulant'>
                <spanLogin />
                {username}
                <ul className='sous'>
                  <li>
                    <a href='#'>/</a>
                  </li>
                  <li>
                    {isToken ? (
                      <Button onClick={handleLogout}>Se déconnecter</Button>
                    ) : null}
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </NavbarStyle>
    </stylediv>
  )
}

export default Navbar
