import {Route, Routes} from 'react-router'
import { HomePage } from './Pages/HomePage';
import { CheckOutPage } from './Pages/CheckOutPage';
import { OrdersPage } from './Pages/OrdersPage';
import { TrackingPage } from './Pages/TrackingPage';
import './App.css'
import './index.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<CheckOutPage />}/>
      <Route path="orders" element={<OrdersPage />}/>
      <Route path="tracking" element={<TrackingPage />}/>
    </Routes>
    
  )
}

export default App
