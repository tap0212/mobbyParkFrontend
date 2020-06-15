import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './Components/login/login'
import Dashboard from './Components/Dashboard/dashboard'
export default function Router() {
    return (
        
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        
    )
}
