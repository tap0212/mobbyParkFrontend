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
<<<<<<< HEAD
                <input className='form-control' type="number" placeholder="Phone no"/>
=======
                <input className='form-control' type="text" name="name" placeholder="Name"/>
                <br/>
                <input className='form-control' type="text" name="email" placeholder="Email"/>
>>>>>>> f6e2a8f418e99b7b43f16ca9b645ce5c29bb3ddc
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
