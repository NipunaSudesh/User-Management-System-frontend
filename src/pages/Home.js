import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users,setUsers]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers= async ()=>{
      try {
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    }

    const DeleteUser = async (userId) => {
      try {
          await axios.delete(`http://localhost:8080/user/${userId}`);
          loadUsers();
      } catch (error) {
          console.error("Error deleting user:", error);
      }
  }
  


  return (
    <div className='container py-5' >
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
                <td>

                <Link className='btn btn-primary mx-2' 
                to={`/viewuser/${user.id}`}
                >View</Link>
<Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>


                  <button className='btn btn-danger mx-2'
                  onClick={()=>DeleteUser(user.id)}
                  >Delete</button>
                </td>
              </tr>);
        })
    }
   
  </tbody>
</table>
    </div>
  )
}
