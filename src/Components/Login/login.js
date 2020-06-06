import React from 'react'
import './login.scss'
import img from './logo.jpeg'

export default function Login() {
    return (
        <div>
            <img className='img' src={img} alt='logo'/>
            <h1 className='container signup form-group'>MobbyPark</h1>
            <div className='container signup form-group' >
                <input className='form-control' type="text" name="username" placeholder="username"/>
                <br/>
                <input className='form-control' type="password" name="password" placeholder="password"/>
                <br/>
                <button id='button' className ='btn-primary btn-lg btn-block'>Login </button>
            </div>
        </div>
    )
}
