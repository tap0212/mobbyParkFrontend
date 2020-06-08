import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './signup.scss'
import img from './logo.jpeg'


export default function postSignup() {
    return (
        <div>
            <img className='img' src={img} alt='logo'/>
            <div className='container signup form-group' >
                <h1>Signup</h1>
                <br/>
                <input className='form-control' type="text" placeholder="username"/>
                <br/>
                <input className='form-control' type="password" placeholder="password"/>
                <br/>
                <input className='form-control' type="text" placeholder="Parking name"/>
                <br/>
                <input className='form-control' type="text" placeholder="Parking addr"/>
                <br/>
                <input className='form-control' type="text" placeholder="city"/>
                <br/>
                <input className='form-control' type="number" placeholder="car-capacity" min='0'/>
                <br/>
                <input className='form-control' type="number" placeholder="bike-capacity" min='0'/>
                <br/>
                <button id='button' className ='btn-primary btn-lg '>Signup </button>
            </div>
        </div>
        
    )
}
