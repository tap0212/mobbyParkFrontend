import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './Components/login/login'
import Dashboard from './Components/Dashboard/dashboard'
import ParkingArea from './Components/ParkingArea/parkingArea'
import PrivateRoute from './APICalls/PrivateRoutes'
import Schedule from './Components/schedule/schedule'
import Employee from './Components/employee/employee'
export default function Router() {
    return (
        
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/parking" component={ParkingArea} />
                    <PrivateRoute exact path="/schedule" component={Schedule} />
                    <PrivateRoute exact path="/employee" component={Employee} />
                </Switch>
            </BrowserRouter>
        
    )
}
