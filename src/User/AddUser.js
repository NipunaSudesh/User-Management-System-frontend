import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AddUser() {
    let navigate=useNavigate()

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        PhoneNumber:""
    });

    const {name,username,email,PhoneNumber}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    } 

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded mt-2 p-4 shadow'>
                <h2 className='text-center m-4 '>Rejister User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='md-3'>
                    <label htmlFor='Name' className='form-lable mt-2'>Name</label>
                    <input type={"text"} name='name'
                    className='form-control'
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='md-3'>
                    <label htmlFor='username' className='form-lable mt-2'>User Name</label>
                    <input type={"text"} name='username'
                    className='form-control'
                    placeholder='Enter Your User Name'
                    value={username}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='md-3'>
                    <label htmlFor='email' className='form-lable mt-2'>Email</label>
                    <input type={"text"} name='email'
                    className='form-control'
                    placeholder='Enter Your email Address'
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='md-3'>
                    <label htmlFor='phoneNumber' className='form-lable mt-2'>Phone Number</label>
                    <input type={"text"} name='PhoneNumber'
                    className='form-control'
                    placeholder='Enter Your Phone Number'
                    value={PhoneNumber}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type='submit' className='btn btn-primary mt-4 shadow'>Submit</button>
                <Link to="/" className='btn btn-danger mt-4 mx-4 shadow'>Cencel</Link>
                </form>
            </div>
        </div>
    </div>
  );
};
