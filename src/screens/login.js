import React from 'react'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import LoginFrom from '../components/loginFrom'

const Login = () => {
  const history = useHistory()
  toast.success('test')

  if (localStorage.getItem('token')) {
    history.push('/home')
  }
  return (
    <div>
      {/* Login Form with Instagram Logo and the footer of Instagram */}
      {/* Print Logo */}
      {/* Login Form */}
      <LoginFrom />
    </div>
  )
}
// const StyleLogo = styled.div`
//   align: center;
//   position: absolute;
//   top: 30%;
//   left: 40%;
//   transform: translate(-30%, -30%);
// `

export default Login
