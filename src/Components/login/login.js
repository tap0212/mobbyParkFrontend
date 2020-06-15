import React, { useState} from 'react'
import {Grid} from '@material-ui/core'
import { Redirect} from 'react-router-dom'
import {ReactComponent as SignupSvg} from '../../assets/undraw_fingerprint_swrc.svg'
import { css } from "@emotion/core";
import {PropagateLoader} from "react-spinners";
import './login.scss'
import Logo from '../../assets/logo.jpeg'
import { authenticate, Login} from '../../APICalls/auth'
const Signup = () => {
    const override = css`
    display: block;
    margin-left:50%;
   `;
   const [values, setValues] = useState({
    email:'',
    password:'',
    loading:false,
    didRedirect:false
})
const {email, password, loading,didRedirect} = values;



const handleChange = name => event => {
    setValues({...values,error:false, [name]: event.target.value})
}


const onSubmit = event => {
    event.preventDefault()
    setValues({...values, error:'', loading:true});
    Login({email,password})
        .then(data => {
            console.log(data)
                authenticate(data, () => {
                    setValues({
                        ...values,
                        didRedirect: true
                    })
                })
        }).catch(console.log("error in login"))
}

const performRedirect = () => {
    if(didRedirect){
            return <Redirect to='/dashboard'></Redirect> 
    }
}



    return (
        <div>
            <Grid className={ "signup-container" } container spacing={0}>
                <Grid className="signup-left" item xs={12} sm={12} md={6} lg={6} xl={6}>
                <img className="logo-img" src={Logo} alt=""/>

                    <div className="signup-form">
                        <h3 className="join-head">Login to get insights.</h3>
                        <h4 className="join-head-sub">All your parking facility insights on a single page.</h4>
                        <form className="signup-form-form">
                            <div className="form-control-div">
                                <input
                                 autoFocus
                                 required 
                                 type="email" 
                                 placeholder="john@gmail.com"
                                 onChange={handleChange("email")}
                                 value={email}

                                 />
                            </div>

                            <div className="form-control-div">
                                <input 
                                required 
                                type="password" 
                                placeholder="*******"
                                onChange={handleChange("password")}
                                value={password}
                                />
                            </div>
                            
                            <button onClick={onSubmit}  className="signup-button">Login</button>
                            {loading && 
                                <PropagateLoader
                                    css={override}
                                    size={25}
                                    color={"#6C63FE"}
                                    loading={loading}
                                />
                            }
                        </form>
                        {performRedirect()}
                    </div>
                </Grid>

                <Grid className="signup-right" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <SignupSvg className="login-svg" />
                </Grid>
            </Grid>
        </div>
    )
}
export default Signup