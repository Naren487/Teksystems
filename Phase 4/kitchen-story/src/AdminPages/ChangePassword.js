import React from 'react'
import AdminNav from './AdminNav'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function
  () {
  const [credentials, SetCredentials] = useState([]);
  const [oldPass, SetOp] = useState("");
  const [newPass, SetNp] = useState("");
  const [cNewPass, SetCNP] = useState("");

  const FetchData = () => {
    fetch("http://localhost:8000/admin/1")
      .then(response => response.json())
      .then(json => SetCredentials([json]));
  }
  useEffect(() => {
    FetchData();
  }, [])
  const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cNewPass === newPass) {
      if (credentials[0].password === oldPass) {
        credentials[0].password = newPass;
        try {
          await fetch(`http://localhost:8000/admin/1`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(credentials[0]),
          });
          alert("Password Changed");
          window.location.reload();
        } catch (e) {
          console.error(e);
        }
      }
      else{
        alert("Old password is Invalid")
      }
    }

    else {
      alert("New Passwords Do not Match");
    }
  }
  return (
    <div>
      <AdminNav />
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h2 className="card-title text-center mb-5 text-bold ">Change Password</h2>
                {/* <form> */}
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" onChange={(e) => SetOp(e.target.value)} placeholder="Old Password" />
                  <label for="floatingInput">Old Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" onChange={(e) => SetNp(e.target.value)} placeholder="New Password" />
                  <label for="floatingPassword">New Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" onChange={(e) => SetCNP(e.target.value)} placeholder=" Confirm New Password" />
                  <label for="floatingPassword">Confirm New Password</label>
                </div>


                <div className="d-grid">
                  <button className="btn btn-primary btn-login  fw-bold" onClick={handleSubmit} type="submit">Change</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
