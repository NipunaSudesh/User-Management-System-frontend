import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers= async ()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
        console.log(result.data);
    }

  return (
    <div className='container' >
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>{
            return( 
                       <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
              </tr>);
        })
    }
   
  </tbody>
</table>
    </div>
  )
}
