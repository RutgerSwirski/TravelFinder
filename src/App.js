import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
  <BrowserRouter>
    <div>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" exact component={ Home } />
      </Switch>
    </div>
  </BrowserRouter>
    
  )
}

export default App
