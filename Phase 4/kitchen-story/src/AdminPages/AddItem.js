import React from 'react'
import AdminNav from './AdminNav'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddItem
  () {
  const [credentials, SetCredentials] = useState([]);
  const [name, SetName] = useState("");
  const [category, SetCategory] = useState("");
  const [price,SetPrice ] = useState("");
  const [image,SetImage ] = useState("");
  const [quantity, SetQuantity] = useState("");

 
  const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(name!="" && category!="" && price!="" && image!="" && quantity!=""){
        const data={
            "name": name,
      "category": category,
      "price": price,
      "quantity":quantity,
      "image":image
        }

        axios.post('http://localhost:8000/data',data).then(res=>{
            alert("Item Added");
            navigate("/admin_home");
          }).catch(err=>{
            alert(err);
          })
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
                <h2 className="card-title text-center mb-5 text-bold ">Add Item</h2>
                {/* <form> */}
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" onChange={(e) => SetName(e.target.value)} placeholder="Name" />
                  <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingPassword" onChange={(e) => SetCategory(e.target.value)} placeholder="Category" />
                  <label for="floatingPassword">Category</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingPassword" onChange={(e) => SetPrice(e.target.value)} placeholder=" Price" />
                  <label for="floatingPassword">Price</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingPassword" onChange={(e) => SetImage(e.target.value)} placeholder="Image URL" />
                  <label for="floatingPassword">Image URL</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingPassword" onChange={(e) => SetQuantity(e.target.value)} placeholder=" Quantity" />
                  <label for="floatingPassword">Quantitytext</label>
                </div>


                <div className="d-grid">
                  <button className="btn btn-primary btn-login  fw-bold" onClick={handleSubmit} type="submit">Add </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
