import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom'

import Login from './../screens/login'
import Home from './../screens/home'
import Compagne from './../screens/compagne'

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Main 3 paths */}
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/compagne' component={Compagne}></Route>
        {/* If i tried to pass a path into url without login -> force us to sign in */}
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
