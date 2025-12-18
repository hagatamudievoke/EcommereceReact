import {Route, Routes} from 'react-router'
import { HomePage } from './Pages/HomePage';
import { CheckOutPage } from './Pages/CheckOutPage';
import { OrdersPage } from './Pages/OrdersPage';
import { TrackingPage } from './Pages/TrackingPage';
import axios from "axios";
import './App.css'
import './index.css'
import { useEffect,useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  useEffect(()=>{
     axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  },[])
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} /> } />
      <Route path="checkout" element={<CheckOutPage cart={cart} /> } />
      <Route path="orders" element={<OrdersPage />}/>
      <Route path="tracking" element={<TrackingPage />}/>
    </Routes>
    
  )
}

export default App
