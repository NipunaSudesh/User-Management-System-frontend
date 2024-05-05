import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: "",
        phoneNumber: ""
    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/user/${id}`);
            setUser(response.data);
        } catch (error) {
            console.error("Error loading user:", error);
        }
    };

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/user/${id}`, user);
            navigate("/");
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const { name, userName, email, phoneNumber } = user;

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded mt-2 p-4 shadow'>
                    <h2 className='text-center m-4 '>Edit User</h2>
                    <form onSubmit={onSubmit}>
                        <div className='md-3'>
                            <label htmlFor='name' className='form-label mt-2'>Name</label>
                            <input
                                type="text"
                                name='name'
                                className='form-control'
                                placeholder='Enter Your Name'
                                value={name}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='md-3'>
                            <label htmlFor='userName' className='form-label mt-2'>User Name</label>
                            <input
                                type="text"
                                name='userName'
                                className='form-control'
                                placeholder='Enter Your User Name'
                                value={userName}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='md-3'>
                            <label htmlFor='email' className='form-label mt-2'>Email</label>
                            <input
                                type="text"
                                name='email'
                                className='form-control'
                                placeholder='Enter Your Email Address'
                                value={email}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='md-3'>
                            <label htmlFor='phoneNumber' className='form-label mt-2'>Phone Number</label>
                            <input
                                type="text"
                                name='phoneNumber'
                                className='form-control'
                                placeholder='Enter Your Phone Number'
                                value={phoneNumber}
                                onChange={onInputChange}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary mt-4 shadow'>Submit</button>
                        <Link to="/" className='btn btn-danger mt-4 mx-4 shadow'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
