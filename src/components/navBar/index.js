/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import logoWhite from '../logo/WhiteLogo.png'
import { Link } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../globalStyles'
import { lightTheme, darkTheme } from '../../config/theme'
import { useDarkMode } from '../useDarkMode'
import Toggle from '../toggler'

import {
  Nav,
  NavLink,
  NavMenu,
  DivLink,
  DivLink2,
  NavMenu2
} from './NavBarElements'

// import { useTranslation } from 'react-i18next'
// import i18next from '../../config/translation'
import { auth, getToken, onMessageListener } from '../../config/firebase'

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
  const user = JSON.parse(localStorage.getItem('user'))
  const [isTokenFound, setTokenFound] = useState(false)
  const [notification, setNotification] = useState({ title: '', body: '' })

  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  // const [navOpen, setNavOpen] = useState(false)

  // const { t } = useTranslation()

  // const handleClick = lang => {
  //   console.log(lang)
  //   i18next.changeLanguage(lang)
  //   console.log(i18next.changeLanguage(lang))
  // }
  function signOut() {
    // [START auth_sign_out]
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      })
    // [END auth_sign_out]
  }
  const handleLogout = () => {
    signOut()
    //delete all localStorage when I logout and push it into login page
    localStorage.clear()
    history.push('/')
  }

  useEffect(() => {
    //console.log(db)
    //use a firestore db to retrieve data for a post
    onMessageListener()
      .then(payload => {
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body
        })
        console.log(payload)
      })
      .catch(err => console.log('failed: ', err))
    getToken(setTokenFound)
  }, [])

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
                <DivLink2>
                  <Toggle theme={theme} toggleTheme={themeToggler} />
                </DivLink2>

                {/* <ButLang onClick={() => handleClick('fr')}> FR</ButLang>
                <ButLang onClick={() => handleClick('en')}> EN </ButLang>
                <ButLang onClick={() => handleClick('es')}></ButLang> */}
                <DivLink>
                  <Toggle theme={theme} toggleTheme={themeToggler} />
                  <Link to={'/compagne'}>
                    <img
                      src='https://fontmeme.com/permalink/210330/2361ff3c1d31055e4256d9118e28c665.png'
                      alt=''
                      style={{
                        height: '40px',
                        paddingLeft: '15px',
                        marginTop: '8px'
                      }}
                    />
                  </Link>
                  <img
                    onClick={handleLogout}
                    src='https://fontmeme.com/permalink/210330/355f2bf121bbb345de79485ea9bf9798.png'
                    alt=''
                    style={{
                      height: '40px',
                      paddingLeft: '15px',
                      marginTop: '8px'
                    }}
                  />
                </DivLink>
              </NavMenu2>

              <NavMenu>
                <NavLink to='/compagne'>
                  {/* <strong>{t('Project.1')}</strong> */}
                  <strong>Ajouter un projet</strong>
                </NavLink>
                <Button onClick={handleLogout}>
                  {/* <strong>{t('Logout.1')}</strong> */}
                  <strong>Se déconnecter</strong>
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
