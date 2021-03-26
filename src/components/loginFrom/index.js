import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

const LoginFrom = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  var token = localStorage

  const sendForm = e => {
    e.preventDefault()
    // verify is had a usename and a password
    if (userName && password) {
      //console.log(userName + ' ' + password)
      axios
        // login with a login api
        .post('https://easy-login-api.herokuapp.com/users/login', {
          username: userName,
          password: password
        })
        // set the token and a user into localStorage then push it into /home
        .then(response => {
          console.log(response)
          token.setItem('token', response.headers['x-access-token'])
          token.setItem('username', userName)
          history.push('/home')
        })
        // catch error
        .catch(err => {
          console.log(err)
        })
      // if we don't set username and password so... put an alert
    } else if (!userName && !password) {
      alert('Les champs ne doivent pas être vide !!!')
    }
  }

  return (
    // input form
    <StyledForm>
      {/* Input username */}
      <Input
        placeholder='Nom d’utilisateur'
        type='text'
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      {/* Input password */}
      <Input
        placeholder='Mot de passe'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      ></Input>
      <Buttons onClick={sendForm}>Connexion</Buttons>
    </StyledForm>
  )
}
// CSS for Button
const Buttons = styled.button`
  max-width: 100%;
  margin-bottom: 40px;
  margin-right: 10%;
  margin-left: 10%;

  margin-top: 20px;
  padding: 20px 6px 20px 6px; /*Make this smaller for 100% responsiveness*/
  box-sizing: border-box;
  border-color: #bbb;
  border: 1px solid #ff0f00;
  color: #fff;
  border-radius: 3px;
  color: black;
  background: #ff0f00;
  float: center;
  text-align: center;
`
//CSS for a form
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
//CSS for Input
const Input = styled.input`
  max-width: 100%;
  margin-bottom: 40px;
  margin-right: 10%;
  margin-left: 10%;

  margin-top: 20px;
  padding: 20px 6px 20px 6px; /*Make this smaller for 100% responsiveness*/
  border: 1px solid #efefef;
  border-radius: 3px;
  box-sizing: border-box;
  border-color: #bbb;
  color: black;
  float: center;
  text-align: center;
`

export default LoginFrom
