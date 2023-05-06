import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ResponsiveAppBar from "../Components/Appbar";
import {Link} from "react-router-dom"
import "./css/productDetails.css"
function ProductDetails(){
    const [data,setData]=useState([]);
    const [filter,SetFilter]=useState('');
const state=useParams();
    const FetchData=()=>{
        fetch("http://localhost:8000/data/"+state.id)
        .then(response => response.json())
        .then(json =>setData([json]));
    }
    const cards=()=>{
        if(data.length==0){
            return(
                <h3>No data Available</h3>
            );
        }
        else{
            return(
                <>
        {}
        <div className="container my-5">
        <div className="row">
            <div className="col-md-5">
                <div className="main-img">
                    <img className="img-fluid" src={data[0].image} alt="ProductS"/>
                    
                </div>
            </div>
            <div className="col-md-7">
                <div className="main-description px-2">
                    <div className="category text-bold">
                        Category: {data[0].category}
                    </div>
                    <div className="product-title text-bold my-3">
                        {data[0].name }
                    </div>


                    <div className="price-area my-4">
                         <p className="new-price text-bold mb-1">Rs/-{data[0].price}</p>
                        <p className="text-secondary mb-1">(Additional tax may apply on checkout)</p>

                    </div>


                    <div className="buttons d-flex my-5">
                    <div className="block ml-5">
                        <h3>Select a Payment Method</h3>
                        </div>
                        <div className="block ml-5">
                       <div class="select">
  <select id="standard-select" onChange={(e)=>SetFilter(e.target.value)} >
                            <option value="COD">COD</option>
                            <option value="Card">Credit or Debit Card</option>

                           </select>
                           </div>
                        </div>
                        
                        <div className="block ml-5">

                            <Link to={{
                                pathname:`/payment/${filter}/${data[0].id}`
                            }} className=" shadow btn custom-btn">Buy</Link>
                        </div>

                       
                    </div>




                </div>

                <div className="product-details my-4">
                    
                    <div className="col-md-11 text">
                        Have a question about our products at E-Store? Feel free to contact our representatives email(dummy@123.com).
                    </div>
                </div>

                <div className="delivery my-4">
                    <p className="font-weight-bold mb-0"><span><i className="fa-solid fa-truck"></i></span> <b>Delivery done in 3 days from date of purchase</b> </p>
                    <p className="text-secondary">Order now to get this product delivery</p>
                </div>
                <div className="delivery-options my-4">
                    <p className="font-weight-bold mb-0"><span><i className="fa-solid fa-filter"></i></span> <b>Payment  options</b> </p>
                    <p className="text-secondary">Cash on Delivery or Cards</p>
                </div>
                
             
            </div>
        </div>
    </div>





    </>
            );
        }
    }
    useEffect(()=>{
          FetchData();
        console.log(data);
    },[])
    return(
       <>
       <ResponsiveAppBar/>
       {
        cards()
       }
       </>
        
         
    );
}
export default ProductDetails;