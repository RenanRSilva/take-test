import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

import { makeVehicles } from '../factories/pages/vehicle-list-factory'

export const Router: React.FC =() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={makeVehicles} />
      </Switch>
    </BrowserRouter>
  )
}
