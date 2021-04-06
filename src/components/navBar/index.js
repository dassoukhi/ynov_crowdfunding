import React, { useEffect, useState } from 'react'
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
  NavMenu2,
  Button,
  ButLang
} from './NavBarElements'

import { useTranslation } from 'react-i18next'

import { auth, getToken, onMessageListener } from '../../config/firebase'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../actions/user'

const Navbar = () => {
  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const user = useSelector(state => state.user.userValue)
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [isTokenFound, setTokenFound] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState({ title: '', body: '' })

  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const { t, i18n } = useTranslation()

  function signOut() {
    // [START auth_sign_out]
    auth
      .signOut()
      .then(() => {
        console.log('Sign-out successful.')
      })
      .catch(error => {
        // An error happened.
        console.log(error)
      })
    // [END auth_sign_out]
  }
  const handleLogout = () => {
    signOut()
    //delete all localStorage when I logout and push it into login page
    dispatch(addUser({}))
    history.push('/')
  }

  useEffect(() => {
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

                <ButLang onClick={() => i18n.changeLanguage('fr')}> FR</ButLang>
                <ButLang onClick={() => i18n.changeLanguage('en')}>EN</ButLang>
                <ButLang onClick={() => i18n.changeLanguage('en')}></ButLang>
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
                  <strong>{t('project')}</strong>
                </NavLink>
                <Button onClick={handleLogout}>
                  <strong>{t('logout')}</strong>
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
