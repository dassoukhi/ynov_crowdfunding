import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom'

import Login from './../screens/login'
import SignUp from './../components/singUp'
import Home from './../screens/home'
import Compagne from './../screens/compagne'
import AddProject from './../components/compaign/addProject'
import Gived from './../components/compaign/gived'
import Detail from './../components/detail'

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Main 3 paths */}
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route path='/project/:id' component={Detail}></Route>
        <Route exact path='/compagne' component={Compagne}></Route>
        <Route exact path='/compagne/addProject' component={AddProject}></Route>
        <Route exact path='/compagne/gived' component={Gived}></Route>
        {/* If i tried to pass a path into url without login -> force us to sign in */}
        {/* <Redirect to='/'></Redirect> */}
      </Switch>
    </Router>
  )
}

export default Routes
