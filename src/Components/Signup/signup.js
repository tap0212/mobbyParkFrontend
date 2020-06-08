import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './signup.scss'
import img from './logo.jpeg'


export default function Signup() {
    return (
        <div>
            <img className='img' src={img} alt='logo'/>
            <div className='container signup form-group' >
                <h1>MobbyPark</h1>
                <input className='form-control' type="number" placeholder="Phone no"/>
                <br/>
                <button id='button' className ='btn-primary btn-lg '>Send OTP</button>
            </div>
            <div className='container signup form-group'>
                <input className='form-control' type="number" placeholder="Enter OTP"/>
                <br/>
                <button className ='btn-success btn-lg '>Verify</button>
            </div>
        </div>
        
    )
}
