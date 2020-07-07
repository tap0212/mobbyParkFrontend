import React, {useState} from 'react'
import { css } from "@emotion/core";
import {PropagateLoader} from "react-spinners";
import './add.scss'
import {AddEmployeeAPICall} from '../../APICalls/employee'


function AddEmployee(props) {
    const override = css`
    display: block;
    margin-left:50%;
    margin-top:10vh;
   `;


    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const user = {
            email:email,
            password:password,
            phone:phone
        }
        console.log(user)
        const operatorToken = JSON.parse(localStorage.getItem("jwt")).token
        AddEmployeeAPICall(operatorToken, user)
            .then(res => {
                console.log(res)
                if(res.errors){
                    setError(res.errors)
                    setLoading(false)
                }
                else{
                    setLoading(false)
                    props.setOpenModal(false)
                }
                
            })
            .catch(err =>{
                console.log(err)
                setLoading(false)
            })
    }
    const renderError = () => {
        if(error){
            return(
                error.map(e => {
                    return (
                        <p style={{color:"red"}}>{e.msg}</p>
                    )
                })
            )
        }
    }
    return (
        <div>
        <h1>Add New Employee</h1>
            <form>
                <div className="addEmployeeForm">
                        
                       
                            <div className="form-control-div">
                                <input
                                 autoFocus
                                 required 
                                 type="email" 
                                 placeholder="john@gmail.com"
                                 onChange={(e) => setEmail(e.target.value)}
                                 value={email}

                                 />
                            </div>

                            <div className="form-control-div">
                                <input 
                                required 
                                type="tel" 
                                placeholder="+91- 98xxxxxxxx"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                />
                            </div>

                            <div className="form-control-div">
                                <input 
                                required 
                                type="password" 
                                placeholder="*******"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                />
                            </div>
                            
                            <button onClick={onSubmit}  className="btn">Add</button>
                            {renderError()}
                            {loading && 
                                <PropagateLoader
                                    css={override}
                                    size={15}
                                    color={"#6C63FE"}
                                    loading={loading}
                                />
                            }
                       
                        
                    </div>
            </form>
        </div>
    )
}

export default AddEmployee
