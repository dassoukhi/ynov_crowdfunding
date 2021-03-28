import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import logo from '../logo/favicon.png'

import './index.css'
import { getToken, onMessageListener } from '../../config/firebase'

const NavbarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  text-align: justify;

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
  const user = JSON.parse(localStorage.getItem('user'))
  const [isTokenFound, setTokenFound] = useState(false)
  const [notification, setNotification] = useState({ title: '', body: '' })
  const handleLogout = () => {
    //delete all localStorage when I logout and push it into login page
    localStorage.clear()
    history.push('/')
  }
  onMessageListener()
    .then(payload => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body
      })
      console.log(payload)
    })
    .catch(err => console.log('failed: ', err))
  useEffect(() => {
    //console.log(db)
    //use a firestore db to retrieve data for a post
    getToken(setTokenFound)
  }, [])
  const addProject = () => {
    history.push('/compagne')
  }
  const Home = () => {
    history.push('/home')
  }
  return (
    <stylediv>
      <NavbarStyle>
        {/* <div>
          <img src={logo} alt='' height='auto' />
        </div> */}
        <div>
          <div>
            <img src={logo} alt='' />
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
          {/* <spanLogin />
          {user ? (
            <Button onClick={handleLogout}>Se déconnecter</Button>
          ) : null} */}
          {/* {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
          {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
          <h3>{notification.title}</h3>
          <p>{notification.body}</p>{' '} */}
          <nav>
            <ul>
              <li className='deroulant'>
                <spanLogin />
                {user ? user.email : ''}
                <ul className='sous'>
                  <li>
                    <a href='#'>/</a>
                  </li>
                  <li>
                    {user ? (
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
