import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ViewUser() {

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
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded mt-2 p-4 shadow'>
            <h2 className='text-center m-4 '>User Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of user id : 
                        <ul className='list-group group-item-flush'>
                            <li className='list-group-item'>
                                <b>Name:</b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>UserName:</b>
                                {user.userName}
                            </li>
                            <li className='list-group-item'>
                                <b>Email:</b>
                                {user.email}
                            </li>
                            <li className='list-group-item'>
                                <b>PhoneNumber:</b>
                                {user.phoneNumber}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back</Link>
            </div>
            </div>
            </div>
  )
}
