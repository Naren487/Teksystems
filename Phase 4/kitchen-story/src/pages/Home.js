import { useEffect, useState } from "react";
import Data from "../data.json";
import { Padding } from "@mui/icons-material";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductDetails from "./ProductDetails";
import ResponsiveAppBar from "../Components/Appbar";

function Home() {
  const [items,SetItems]=useState([]);
  const [filter,SetFilter]=useState('');
  const searchText=(event)=>{
    SetFilter(event.target.value);
  }
  let dataSearch=items.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  })
    useEffect(()=>{
      fetch("http://localhost:8000/data")
    .then(response => response.json())
    .then(json =>SetItems(json));
})
  return (
    <div >
      <ResponsiveAppBar/>
      <h1 className='text-center text-primary mt-4'> Search Items</h1>
              
          <section className="py-4 container">
          <div className="row justify-content-center">
            <div className="col-12 mb-5">
              <div className="mb3 col-4 mx-auto text-center">
                <input type="text" 
                className="form-control"
                 value={filter}
                 onChange={searchText.bind(this)}
                 />
              </div>
            </div>
      {
        dataSearch.map((item,index)=>{
          return (
              <div key={item.id} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                  <div className="card p-0 overflow-hidden h-100 shadow">
                      <img src={item.image} width={50} height={200} className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">
                              {item.name}
                          </h3>
                          <h4 className="card-title">
                             Price: Rs/-{item.price}
                          </h4>
                          <h5 className="card-title">
                            Quantity  {item.quantity}
                          </h5>
                          <Link to={{
                            pathname:`data/${item.id}`
                          }} className="btn btn-success">Add </Link>
                      </div>
  
                  </div>
              </div>
          )
        })
      }
      </div>

    </section>
    </div>
  );
}

export default Home;
