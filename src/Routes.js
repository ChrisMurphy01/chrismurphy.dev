import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '@page/Home'
import Code from '@page/Code'
import Work from '@page/Work'

import 'styles/index.scss'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/code' component={Code} />
    <Route path='/work' component={Work} />
  </Switch>
)

export default Routes
