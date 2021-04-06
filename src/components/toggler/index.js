/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import soleil from './sun.png'
import soleilwhite from './white.png'

const Button = styled.button`
  border: none;
  border-style: none;
  outline: none;
  padding-left: 24px; /* pour décaler le texte, qu'il ne chevauche pas mon image*/
  background-color: transparent;
  float: right;
`
// eslint-disable-next-line no-unused-vars
const Toggle = ({ theme, toggleTheme }) => {
  const isTheme = localStorage.getItem('theme')
  if (isTheme === 'dark') {
    return (
      <Button onClick={toggleTheme}>
        <img src={soleilwhite} style={{ height: '50px', border: 'none' }} />
      </Button>
    )
  } else {
    return (
      <Button onClick={toggleTheme}>
        <img src={soleil} style={{ height: '50px', border: 'none' }} />
      </Button>
    )
  }
}
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}
export default Toggle
