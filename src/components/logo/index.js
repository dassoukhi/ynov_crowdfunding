import React from 'react'
import styled from 'styled-components'
import logo from './favicon.png'

const Logo = () => {
  return (
    <div>
      <br></br>
      {/* Logo */}
      <Imgcss src={logo} alt='logo' />
    </div>
  )
}
//CSS for Image
const Imgcss = styled.img`
  //background: cover no-repeat;
  width: 175px;
  margin-left: auto;
  margin-right: auto;
`
export default Logo
