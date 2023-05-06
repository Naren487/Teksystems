import React, { useState,useEffect } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import ResponsiveAppBar from '../Components/Appbar';
import "./css/payment.css"
import axios from 'axios';
export default function Payment() {
    const [name,SetName]=useState("");
    const [phone,SetPhone]=useState("");
    const [email,SetEmail]=useState("");
    const [address,SetAddress]=useState("");
    const {type,id}=useParams();
    const [data,setData]=useState([])
    const FetchData=()=>{
        fetch("http://localhost:8000/data/"+id)
        .then(response => response.json())
        .then(json =>setData([json]));
    }
    useEffect(()=>{
        FetchData();
    },[])

    const navigate=useNavigate();
    const HandleSubmit=()=>{
        let today = new Date().toISOString().slice(0, 10)
        if(name!="" && address!="" && phone!="" && email!=""){
            const data={
                "name":name,
                "address":address,
                "phone":phone,
                "email":email,
                "payment":type,
                "item":id,
                "date":today
            }
            axios.post('http://localhost:8000/orders',data).then(res=>{
                alert('Order Successfully Placed.')
                navigate("/order",{
                    state:data
                }
                );
              }).catch(err=>{
                alert(err.message)
              })
        }
        else{
            alert("Fill all the fields")
        }
    }
    const PaymentType=()=>{
        if(type==="Card"){
            return(
                <div className="card-body">
                    <h2 className="title">Payment Details</h2>
                    <form method="POST">
                        <div className="input-group">
                            {/* <label>Name</label> */}
                            <input className="input--style-1" type="text" onChange={(e)=>SetName(e.target.value)} placeholder="Enter your Card Number" name="name"/>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <input className="input--style-1 js-datepicker" type="text" placeholder="Enter your Expiry Date" name="birthday"/>
                                    {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i> */}
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <input className="input--style-1 js-datepicker" type="text" placeholder="Enter your CVV" name="birthday"/>
                                    {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i> */}
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
            );
        }
        else{
            return(
                <h4>Payment Mode is Cash on Delivey</h4>
            );
        }
    }


  return (
    <>
    <ResponsiveAppBar/>
    <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <div className="wrapper wrapper--w680">
            <div className="card card-1">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">User Details</h2>
                    <form method="POST">
                        <div className="input-group">
                            {/* <label>Name</label> */}
                            <input className="input--style-1" type="text" onChange={(e)=>SetName(e.target.value)} placeholder="Enter your Name" name="name"/>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <input className="input--style-1 js-datepicker" onChange={(e)=>SetPhone(e.target.value)} type="text" placeholder="Enter your Phone" name="birthday"/>
                                    {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i> */}
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <input className="input--style-1 js-datepicker" type="text" onChange={(e)=>SetEmail(e.target.value)} placeholder="Enter your Email" name="birthday"/>
                                    {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i> */}
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <input className="input--style-1" type="text" onChange={(e)=>SetAddress(e.target.value)} placeholder="Enter your Address" name="name"/>
                        </div>
                    </form>
                </div>
{
    PaymentType()
}
<div className="p-t-20">
                            <button className="btn btn--radius btn--green" onClick={HandleSubmit} type="submit">Submit</button>
                        </div>
            </div>
        </div>
    </div>
    </>
  )
}
