import React, { useEffect } from 'react'
import UserProfile from '../Components/Sessions'
import { Link, useNavigate } from 'react-router-dom'

export default function 
() {
    const navigate=useNavigate();
    const Logout=()=>{

        UserProfile.setName("")
        navigate('/');
    }
    var user;
    useEffect(()=>{
        console.log(typeof(UserProfile.getName()));
    },[])
   const login_logout=()=>{
    if(user===undefined){
        return(
            <div className="navbar-nav ms-auto">
                 <button  onClick={Logout}   className="btn ">Admin</button>
            </div>
        );
    }
    else{
        return(
            <div className="navbar-nav ms-auto">
                 <button  onClick={Logout}  className="btn ">Logout</button>
            </div>
        );
    }
   }
    console.log(user);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a href="#" className="navbar-brand">Kitchen Story Admin</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <Link to="/admin_home" className="nav-item nav-link ">Home</Link>
                <Link to="/changePassword" href="#" className="nav-item nav-link">Change Password</Link>
            </div>
            {
                login_logout()
            }
        </div>
    </div>
</nav>
    </div>
  )
}
