import {Route, Routes} from 'react-router'
import { HomePage } from './Pages/HomePage';
import { CheckOutPage } from './Pages/CheckOutPage';
import './App.css'
import './index.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<CheckOutPage />}/>
    </Routes>
    
  )
}

export default App
