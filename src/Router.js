import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/home'
import Login from './Components/Login/login'
import Signup from './Components/Signup/signup'
export default function Router() {
    return (
        
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        
    )
}
