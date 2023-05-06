import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import UserProfile from '../Components/Sessions';
import { useNavigate } from 'react-router-dom';
export default function 
() {
    const [credentials,SetCredentials]=useState([]);
    const [username,SetUsername]=useState("");
    const [password,SetPassword]=useState("");
    const navigate=useNavigate();
    const FetchData=()=>{ 
        fetch("http://localhost:8000/admin/1")
        .then(response => response.json())
        .then(json =>SetCredentials([json]));
    }
    useEffect(()=>{
        FetchData();
    },[])
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(credentials[0].username===username && credentials[0].password===password){
            alert("Login");
            UserProfile.setName(username);
            navigate('/admin_home')
        }
        else{
            alert("Invalid Credentials");
        }
    }
  return (
    <div>
        <AdminNav/>
        <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h2 className="card-title text-center mb-5 text-bold ">Admin Login</h2>
            {/* <form> */}
              <div className="form-floating mb-3">
                <input type="text" className="form-control" onChange={(e)=>SetUsername(e.target.value)} id="floatingInput" placeholder="Username"/>
                <label for="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" onChange={(e)=>SetPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              
              <div className="d-grid">
                <button className="btn btn-primary btn-login  fw-bold" onClick={handleSubmit}  type="submit">Login</button>
              </div>
             
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
