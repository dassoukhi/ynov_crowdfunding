import React from 'react'
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
      {/* Login Form */}
      <LoginFrom />
    </div>
  )
}

export default Login
