import React from 'react'
import styled from 'styled-components'

import Logo from '../components/logo'
import RegisterF from '../components/register'

const Register = () => {
  return (
    <div>
      {/* Login Form with Instagram Logo and the footer of Instagram */}
      {/* Print Logo */}
      <StyleLogo>
        <Logo />
      </StyleLogo>
      {/* Login Form */}
      <RegisterF />
    </div>
  )
}
const StyleLogo = styled.div`
  align: center;
`

export default Register
