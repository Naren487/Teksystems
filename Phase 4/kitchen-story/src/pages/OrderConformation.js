import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ResponsiveAppBar from '../Components/Appbar';

export default function OrderConformation() {
    const location = useLocation()
    const data = (location.state);

    const [items, SetItem] = useState([])
    const FetchData = () => {
        fetch("http://localhost:8000/data/" + data.item)
            .then(response => response.json())
            .then(json => SetItem([json]));
    }
    useEffect(() => {
        FetchData();
    }, [])

    const Details = () => {
        if (items.length != 0) {
            return (

                <div className="container mt-5 mb-5">

                    <div className="row d-flex justify-content-center">

                        <div className="col-md-8">

                            <div className="card">



                                <div className="invoice p-5">

                                    <h5>Your order Confirmed!</h5>

                                    <span className="font-weight-bold d-block mt-4">Hello, {data.name}</span>
                                    <span>You order has been confirmed and will be shipped in next two days!</span>

                                    <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">

                                        <table className="table table-borderless">

                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="py-2">

                                                            <span className="d-block text-muted">Order Date</span>
                                                            <span>{data.date}</span>

                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="py-2">

                                                            <span className="d-block text-muted">Order No</span>
                                                            <span>{data.phone + data.item}</span>

                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="py-2">

                                                            <span className="d-block text-muted">Payment</span>
                                                            <span>{data.payment}</span>

                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="py-2">

                                                            <span className="d-block text-muted">Shiping Address</span>
                                                            <span>{data.address}</span>

                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>





                                    </div>




                                    <div className="product border-bottom table-responsive">

                                        <table className="table table-borderless">

                                            <tbody>
                                                <tr>
                                                    <td width="20%">

                                                        <img src={items[0].image} width="90" />

                                                    </td>

                                                    <td width="60%">
                                                        <span className="font-weight-bold">{items[0].name}</span>
                                                        <div className="product-qty">
                                                            <span className="d-block">Quantity:{items[0].quantity}</span>
                                                            <span>Category:{items[0].category}</span>

                                                        </div>
                                                    </td>
                                                    <td width="20%">
                                                        <div className="text-right">
                                                            <span className="font-weight-bold">Rs/-{items[0].price}</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>



                                    </div>



                                    <div className="row d-flex justify-content-end">

                                        <div className="col-md-5">

                                            <table className="table table-borderless">

                                                <tbody className="totals">

                                                    <tr>
                                                        <td>
                                                            <div className="text-left">

                                                                <span className="text-muted">Total</span>

                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-right">
                                                                <span>Rs/-{items[0].price}</span>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                </tbody>

                                            </table>

                                        </div>



                                    </div>


                                    <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
                                    <p className="font-weight-bold mb-0">Thanks for shopping with us!</p>
                                    <span>Kitchen Story</span>




                                </div>
                                <Link to="/" className='btn btn-success'>Back to Home</Link>







                            </div>

                        </div>

                    </div>

                </div>
            );
        }
        else {
            return (
                <h3>No Data Found</h3>
            );
        }
    }
    return (

        <div>
            <ResponsiveAppBar />
            {
Details()
            }
        </div>
    )
}
