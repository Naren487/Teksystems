
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
// import Updateuser from './Component/Updateuser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Adduser from './Component/AddEvent';
import EventsListing from './Component/EventsListing';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <div className='header'>
          <Link to={'/'}>Event Finder</Link>
        </div>
        <Routes>
          <Route path='/' element={<EventsListing></EventsListing>}></Route>
          <Route path='/events' element={<EventsListing></EventsListing>}></Route>
          <Route path='/events/add' element={<Adduser></Adduser>}></Route>
          {/* <Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
