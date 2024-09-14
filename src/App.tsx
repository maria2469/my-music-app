import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { GenerateMusic } from './pages/generateMusic'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container bg-white">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/generate-music" component={GenerateMusic} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
