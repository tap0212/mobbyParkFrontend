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
                <input className='form-control' type="text" name="username" placeholder="username"/>
                <br/>
                <input className='form-control' type="password" name="password" placeholder="password"/>
                <br/>
                <button id='button' className ='btn-primary btn-lg btn-block'>Sign up</button>
            </div>
        </div>
        
    )
}
