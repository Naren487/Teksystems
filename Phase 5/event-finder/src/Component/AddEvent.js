import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddEvents } from "../Redux/Action";

const AddEvents = () => {
    const [name, namechange] = useState('');
    const [date, datechange] = useState('');
    const [location, locationchange] = useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { name, date, location };
        dispatch(FunctionAddEvents(userobj));
        navigate('/events');
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add an Event</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input value={date} type="date" onChange={e => datechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Location</label>
                                    <input value={location} onChange={e => locationchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            {/* <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Role</label>
                                    <select value={role} onChange={e => rolechange(e.target.value)} className="form-control">
                                        <option value="admin">Admin</option>
                                        <option value="staff">Staff</option>
                                    </select>
                                </div>
                            </div> */}

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/events'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default AddEvents;