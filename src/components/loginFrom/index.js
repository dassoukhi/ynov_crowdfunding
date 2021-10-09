import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../config/firebase'
import Logo from '../logo'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../actions/user'
import { Buttons, StyledForm, Input } from './indexStyle'

const LoginFrom = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const user = useSelector(state => state.user.userValue)
  const dispatch = useDispatch()

  function signInWithEmailPassword(email, password) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        var user = userCredential.user
        dispatch(addUser({ email: user.email, uid: user.uid }))

        localStorage.setItem(
          'user',
          JSON.stringify({ email: user.email, uid: user.uid })
        )
        history.push('/home')
      })
      .catch(error => {
        var errorMessage = error.message
        console.log('error: ', errorMessage)
      })
    // [END auth_signin_password]
  }

  const sendForm = e => {
    e.preventDefault()
    // verify is had a usename and a password
    if (userName && password) {
      //console.log(userName + ' ' + password)
      signInWithEmailPassword(userName, password)
      console.log('user :', user)

      // if we don't set username and password so... put an alert
    } else if (!userName && !password) {
      alert('Les champs ne doivent pas être vide !!!')
    }
  }

  return (
    // input form
    <StyledForm>
      {/* Input username */}
      <Logo />
      <Input
        placeholder='Email'
        type='email'
        required
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      {/* Input password */}
      <Input
        placeholder='Mot de passe'
        type='password'
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      ></Input>
      <Buttons onClick={sendForm}>Connexion</Buttons>
      <a href='/signup'>S&apos;inscrire</a>
    </StyledForm>
  )
}

export default LoginFrom
