import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'

function Main(){
    return(
        <Switch>
        <Route exact path="/" component = { Home } />
        <Route path ="/about" component = { About } />
        <Route path ="/contact" component = { Contact } />
        <Route path ="/projects" component = { Projects } />
        <Route path ="/resume" component = { Resume } />
    </Switch>
    )
}

export default Main;