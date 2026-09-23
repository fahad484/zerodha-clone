import React,{useState} from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {ToastContainer , toast} from "react-toastify";

import "./Auth.css";

const Login = () => {
    const navigate =useNavigate();
    const [inputValue ,setInputValue] = useState({
        email:"",
        password:"",
    });
    const {email ,password} = inputValue;

    const handleOnChange = (e) =>{
        const {name ,value }= e.target;
        setInputValue({
            ...inputValue,
            [name]:value,
        });
    };

    const handleError = (error) =>{
        toast.error(error,{
            position:"bottom-left",
        });
    };

    const handleSuccess = (msg) =>{
        toast.success(msg,{
            position:"bottom-right",
        });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:3002/login",
                {
                    ...inputValue,
                },{
                    withCredentials:true,
                }
            )
            console.log(data);
            const {success ,message} = data;
            if(success){
                handleSuccess(message);
                setTimeout(()=>{
                    navigate("/");
                },1000);
            }else{
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            email:"",
            password:"",
        });
    }
    return (
        <div className="auth_page">

            <div className='form_container'>
                <h2>Login Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name='email' value={email} placeholder='Enter your email' onChange={handleOnChange} required/>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name='password' value={password} placeholder='Enter your password' onChange={handleOnChange} required/>
                        <button type='submit'>submit</button>
                        <span>
                            Don't have an account?<Link to={"/signup"}>Signup</Link>
                        </span>
                    </div>
                </form>
                <ToastContainer/>
            </div>
        </div>
  )
}

export default Login;