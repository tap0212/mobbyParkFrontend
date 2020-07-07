import React, {useEffect, useState} from 'react'
import NavBar from '../Navbar/navbar'
import {getOperatorById} from '../../APICalls/auth'
import {Grid} from '@material-ui/core'
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import {Table} from 'react-bootstrap'

import './dashboard.scss'
 const Dashboard = () => {
     const [operator, setOperator] = useState("")
     useEffect(() => {
         const operatorId = JSON.parse(localStorage.getItem("jwt")).operator._id
         getOperatorById(operatorId)
            .then(res => {
                setOperator(res)
                console.log(res)
            })
            .catch(err => console.log(err))
     }, [])
    return (
        <div>
            <NavBar />
            <div className="dashboard-container">
                <div className="operator">
                <h2 style={{textTransform:"uppercase"}}> <LocalParkingIcon /> {operator.parking_name}</h2>
                <h2> <LocationOnIcon /> {operator.parking_addr}</h2>
                </div>
                <div className="capacity">
                <h2>Capacity</h2>
                    <Grid container>
                        <Grid item >
                            <div className="car">
                            <DriveEtaIcon  style={{fontSize:"40"}}/>
                            <h4>{operator.car_capacity}</h4>
                            </div>
                        </Grid>

                        <Grid item >
                            <div className="bike">
                            <MotorcycleIcon  style={{fontSize:"40"}}/>
                            <h4>{operator.bike_capacity}</h4>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className="pricing">
            <h2>Pricing</h2>

            <div className="weekend">
            <h3>Weekend Pricing </h3>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Timing</th>
                        <th>Car</th>
                        <th>Bike</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>0-2 hrs</td>
                        <td>{operator.H0_2_wecar}</td>
                        <td>{operator.H0_2_we}</td>
                        
                        </tr>

                        <tr>
                        <td>2</td>
                        <td>2-4 hrs</td>
                        <td>{operator.H2_4_wecar}</td>
                        <td>{operator.H2_4_we}</td>
                       
                        </tr>

                        <tr>
                        <td>3</td>
                        <td>4-6 hrs</td>
                        <td>{operator.H4_6_wecar}</td>
                        <td>{operator.H4_6_we}</td>
                        </tr>

                        <tr>
                        <td>4</td>
                        <td>6-9 hrs</td>
                        <td>{operator.H6_9_wecar}</td>
                        <td>{operator.H6_9_we}</td>
                        </tr>

                        <tr>
                        <td>5</td>
                        <td>9-12 hrs</td>
                        <td>{operator.H9_12_wecar}</td>
                        <td>{operator.H9_12_we}</td>
                        </tr>

                        <tr>
                        <td>6</td>
                        <td>12-24 hrs</td>
                        <td>{operator.H12_24_wecar}</td>
                        <td>{operator.H12_24_we}</td>
                        </tr>
                    </tbody>
                    </Table>
              </div>


              <div className="weekend">
            <h3>Week Day Pricing </h3>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Rules</th>
                        <th>Car</th>
                        <th>Bike</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>0-2 hrs</td>
                        <td>{operator.H0_2_wdcar}</td>
                        <td>{operator.H0_2_wd}</td>
                        
                        </tr>

                        <tr>
                        <td>2</td>
                        <td>2-4 hrs</td>
                        <td>{operator.H2_4_wdcar}</td>
                        <td>{operator.H2_4_wd}</td>
                       
                        </tr>

                        <tr>
                        <td>3</td>
                        <td>4-6 hrs</td>
                        <td>{operator.H4_6_wdcar}</td>
                        <td>{operator.H4_6_wd}</td>
                        </tr>

                        <tr>
                        <td>4</td>
                        <td>6-9 hrs</td>
                        <td>{operator.H6_9_wdcar}</td>
                        <td>{operator.H6_9_wd}</td>
                        </tr>

                        <tr>
                        <td>5</td>
                        <td>9-12 hrs</td>
                        <td>{operator.H9_12_wdcar}</td>
                        <td>{operator.H9_12_wd}</td>
                        </tr>

                        <tr>
                        <td>6</td>
                        <td>12-24 hrs</td>
                        <td>{operator.H12_24_wdcar}</td>
                        <td>{operator.H12_24_wd}</td>
                        </tr>
                    </tbody>
                    </Table>
              </div>
            </div>
        </div>
          
    )
}
export default Dashboard