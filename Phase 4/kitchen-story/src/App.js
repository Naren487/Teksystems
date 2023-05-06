import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import ResponsiveAppBar from './Components/Appbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Index from './pages';
import Payment from './pages/Payment';
import OrderConformation from './pages/OrderConformation';
import AdminLogin from './AdminPages/AdminLogin';
import AdminHome from './AdminPages/AdminHome';
import ChangePassword from './AdminPages/ChangePassword';
import AddItem from './AdminPages/AddItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/data/:id" element={<ProductDetails />} />
        <Route path="/payment/:type/:id" element={<Payment />} />
        <Route path="/order" element={<OrderConformation />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin_home" element={<AdminHome />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/addItems" element={<AddItem />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
