import React from 'react'

import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'

export const AppRoutes = () =>{
    return (
 <Switch>
      <Route path="/bgcolor/:colorname" component={BackgroundColorChanger} />
      <Route path="/calculator" component={Calculator} />
      <Route exact path="/" component={Index} />
    </Switch>
    )
}
