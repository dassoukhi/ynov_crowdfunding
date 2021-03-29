import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import logoWhite from '../logo/WhiteLogo.png'
import { Link } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../globalStyles'
import { lightTheme, darkTheme } from '../../config/theme'
import { useDarkMode } from '../useDarkMode'
import Toggle from '../toggler'

import { Nav, NavLink, NavMenu, Bars, NavMenu2 } from './NavBarElements'

import { useTranslation } from 'react-i18next'
import i18next from '../../config/translation'

const Button = styled.button`
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

const ButLang = styled.button`
  background-color: none;
  color: white;
  border: none;
  border-style: none;
  outline: none;
  background-color: transparent;
  padding: 10px;
`

const Navbar = () => {
  const history = useHistory()
  const handleLogout = () => {
    //delete all localStorage when I logout and push it into login page
    localStorage.clear()
    history.push('/')
  }

  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const [navOpen, setNavOpen] = useState(false)

  const { t } = useTranslation()

  const handleClick = lang => {
    console.log(lang)
    i18next.changeLanguage(lang)
    console.log(i18next.changeLanguage(lang))
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <div>
          <div>
            <Nav>
              <NavMenu2>
                <Link to={'/home'}>
                  <img src={logoWhite} alt='' style={{ height: '150px' }} />
                </Link>
                <Toggle theme={theme} toggleTheme={themeToggler} /> <br />
                {/* <ButLang onClick={() => handleClick('fr')}> FR</ButLang>
                <ButLang onClick={() => handleClick('en')}> EN </ButLang>
                <ButLang onClick={() => handleClick('es')}></ButLang> */}
              </NavMenu2>
              <Bars onClick={() => setNavOpen(!navOpen)} />
              <NavMenu>
                <NavLink to='/compagne'>
                  <strong>{/*t('Project.1')*/}Ajouter un projet</strong>
                </NavLink>
                <Button onClick={handleLogout}>
                  {/*t('Logout.1')*/}Se déconnecter
                </Button>
              </NavMenu>
            </Nav>
            <br></br>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Navbar
