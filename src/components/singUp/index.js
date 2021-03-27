import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { auth } from '../../config/firebase'
import Logo from '../../components/logo'

const LoginFrom = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  const history = useHistory()
  const [userConnect, setUserConnect] = useState()

  function signUpWithEmailPassword(email, password) {
    // var email = 'test@example.com'
    // var password = 'hunter2'
    // [START auth_signup_password]
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        var user = userCredential.user
        setUserConnect({ email: user.email, uid: user.uid })
        localStorage.setItem(
          'user',
          JSON.stringify({ email: user.email, uid: user.uid })
        )
        console.log('signIn: ', user.email)
        history.push('/home')
        // ...
      })
      .catch(error => {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorMessage)
        // ..
      })
    // [END auth_signup_password]
  }

  function sendEmailVerification() {
    // [START auth_send_email_verification]
    auth.currentUser.sendEmailVerification().then(() => {
      // Email verification sent!
      // ...
    })
    // [END auth_send_email_verification]
  }

  function sendPasswordReset() {
    const email = 'sam@example.com'
    // [START auth_send_password_reset]
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch(error => {
        var errorCode = error.code
        var errorMessage = error.message
        // ..
      })
    // [END auth_send_password_reset]
  }
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

  function authStateListener() {
    // [START auth_state_listener]
    auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid
        // ...
      } else {
        // User is signed out
        // ...
      }
    })
    // [END auth_state_listener]
  }

  const sendForm = e => {
    e.preventDefault()
    // verify is had a usename and a password
    if (password === confPassword) {
      //console.log(userName + ' ' + password)
      signUpWithEmailPassword(userName, password)
      console.log('user :', userConnect)

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
      <Buttons onClick={sendForm}>S'inscrire</Buttons>
      <a href='/'>Se connecter</a>
    </StyledForm>
  )
}
// CSS for Button
const Buttons = styled.button`
  cursor: pointer;
  width: 110%;
  padding: 0 8px;
  background: #ff0f00;
  border: 1px solid #ff0f00;
  color: #fff;
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  height: 28px;
  line-height: 26px;
  outline: none;
  white-space: nowrap;
  font: inherit;
  vertical-align: baseline;
  position: relative;
`
//CSS for a form
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
//CSS for Input
const Input = styled.input`
  width: 110%;
  margin: auto 40px 6px;
  height: 36px;
  border: 1px solid #efefef;
  border-radius: 3px;
  box-sizing: border-box;
  border-color: #bbb;
  color: black;
  flex-direction: column;
`

export default LoginFrom
