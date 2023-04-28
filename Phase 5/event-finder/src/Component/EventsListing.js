import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchEventsList,Removeevent } from "../Redux/Action";
import "./Event.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Eventslisting = (props) => {
    useEffect(() => {
        props.loadevents();
    }, [])
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
             props.Removeevent(code);
             props.loadevents();
             toast.success('Event Deleted successfully.')
        }
    }
    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :

                <div>
                    <div className="card text-center">
                        <div className="card-header" >
                            <Link to={'/events/add'} className="btn btn-success">Add an Event [+]</Link>
                        </div>
                            <h2 style={{fontSize:'70px'}}>Events</h2>
                        <div className="card-body">
                            <div className="container cards_container">
                            {
                                        props.user.userlist && props.user.userlist.map(item =>
                                            
                                            <Card className="bg-primary" style={{ fontSize:"20px",width: '18rem',margin:'10px',color:'black',border:'5px solid black',borderRadius:'0px' }}>
                                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                            <Card.Body>
                                              <Card.Title><strong>{item.id}.{item.name}</strong></Card.Title>
                                              <Card.Text>
                                               <strong>Date</strong>: {item.date}
                                              </Card.Text>
                                              <Card.Text>
                                              <strong>Location:</strong>  {item.location}
                                              </Card.Text>
                                              <Button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</Button>
                                            </Card.Body>
                                          </Card>
                                        )
                                    }
                                    </div>
                        </div>

                    </div>
                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadevents: () => dispatch(FetchEventsList()),
        Removeevent:(code)=>dispatch(Removeevent(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Eventslisting);
