import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../config/firebase'
import Logo from '../../components/logo'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../actions/user'
import { Buttons, StyledForm, Input } from './indexStyle'

const LoginFrom = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const user = useSelector(state => state.user.userValue)

  function signUpWithEmailPassword(email, password) {
    // var email = 'test@example.com'
    // var password = 'hunter2'
    // [START auth_signup_password]
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        var user = userCredential.user
        dispatch(addUser({ email: user.email, uid: user.uid }))
        localStorage.setItem(
          'user',
          JSON.stringify({ email: user.email, uid: user.uid })
        )
        history.push('/home')
        // ...
      })
      .catch(error => {
        var errorMessage = error.message
        console.log(errorMessage)
        // ..
      })
    // [END auth_signup_password]
  }

  const sendForm = e => {
    e.preventDefault()
    // verify is had a usename and a password
    if (password === confPassword) {
      //console.log(userName + ' ' + password)
      signUpWithEmailPassword(userName, password)

      // if we don't set username and password so... put an alert
    } else {
      alert('Les deux mots de passes doivent être identique')
    }
  }

  return (
    // input form
    <StyledForm>
      <Logo />
      {/* Input username */}
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
      <Input
        placeholder='Confirmation mot de passe'
        type='password'
        required
        value={confPassword}
        onChange={e => setConfPassword(e.target.value)}
      ></Input>
      <Buttons onClick={sendForm}>S&apos;inscrire</Buttons>
      <a href='/'>Se connecter</a>
    </StyledForm>
  )
}

export default LoginFrom
