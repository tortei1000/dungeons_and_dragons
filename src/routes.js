import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NewUser from './components/auth/NewUser'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/Home'
import SingleChar from './components/SingleChar';
import Combat from './components/Combat'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={() => (
      <Login>
        <Register />
      </Login>
    )} />
    <Route path='/register' component={NewUser} />
    <Route path='/home' component={Home} />
    <Route path="/singlechar/:char_name" component={SingleChar} />
    <Route path="/combat/:char_name" component={Combat} />
    
  </Switch>
)