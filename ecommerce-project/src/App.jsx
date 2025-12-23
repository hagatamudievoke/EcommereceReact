import { Route, Routes } from "react-router";
import { HomePage } from "./Pages/Home/HomePage";
import { CheckOutPage } from "./Pages/Checkout/CheckOutPage";
import { OrdersPage } from "./Pages/orders/OrdersPage";
import { TrackingPage } from "./Pages/TrackingPage";
import axios from "axios";
import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
   const cartData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
  useEffect(() => {
   
    cartData();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} cartData={cartData}/>} />
      <Route path="checkout" element={<CheckOutPage cart={cart} cartData={cartData}/>} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage cart={cart} />} />
    </Routes>
  );
}

export default App;
