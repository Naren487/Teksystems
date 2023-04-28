import axios from "axios"
import { toast } from "react-toastify"
import { ADD_EVENT, DELETE_EVENT, FAIL_REQUEST, GET_EVENT_LIST, GET_EVENT_OBJ, MAKE_REQUEST } from "./ActionType"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const geteventList=(data)=>{
    return{
        type:GET_EVENT_LIST,
        payload:data
    }
}
export const deleteevent=()=>{
    return{
        type:DELETE_EVENT
    }
}
export const addevent=()=>{
    return{
        type:ADD_EVENT
    }
}
export const geteventObj=(data)=>{
    return{
        type:GET_EVENT_OBJ,
        payload:data
    }
}



export const FetchEventsList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:8000/events').then(res=>{
            const eventlist=res.data;
            dispatch(geteventList(eventlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const Removeevent=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.delete('http://localhost:8000/events/'+code).then(res=>{
            dispatch(deleteevent());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FunctionAddEvents=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.post('http://localhost:8000/events',data).then(res=>{
            dispatch(addevent());
            toast.success('Event Added successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FetchEventsObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:8000/events/'+code).then(res=>{
            const eventlist=res.data;
            dispatch(geteventObj(eventlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}
