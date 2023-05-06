import React from 'react'
import AdminNav from './AdminNav'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function AdminHome() {
  const [items,SetItems]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8000/data")
  .then(response => response.json())
  .then(json =>SetItems(json));
})


  const handleDelete=(id)=>{
    axios.delete('http://localhost:8000/data/'+id).then(res=>{
      // alert("item Deleted");
    }).catch(err=>{
      alert("Error")
    })
  }
  return (
    <div>
        <AdminNav/>
        <h2 style={{marginTop:'30px',fontFamily:'serif',color:'blueviolet',fontWeight:'bolder',fontSize:'40px'}}>List of Kitchen Items</h2>
        <div className='container'>
        <Link style={{position:"relative",left:'42%',margin:'13px'}} to={'/addItems'} className="btn btn-success">Add an Item [+]</Link>

        <table className="table table-bordered">
                                <thead className="bg-light text-dark">
                                    <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td>Image</td>
                                        <td>Action</td>

                                    </tr>
                                </thead>
                                <tbody className="bg-light text-dark">
                                            {
                                              items.map((item,index)=>{
                                                var id=item.id;
                                                return(
                                                  <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.category}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td><img src={item.image} width={100} height={100}/></td>

                                                <td>
                                                    {/* <Link to={'/user/edit/' + item.id} className="btn btn-primary">Edit</Link> | */}
                                                    <button onClick={()=>handleDelete(id)}  className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                                );
                                              })
                                            }
                                        
                                    

                                </tbody>

                            </table> </div></div>
  )
}
