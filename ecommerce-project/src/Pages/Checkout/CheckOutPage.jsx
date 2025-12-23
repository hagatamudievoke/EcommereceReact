import axios from "axios";

import { useState, useEffect } from "react";
import "./CheckOutPage.css";
import "./checkout-header.css";

import { Link } from "react-router";
import { PaymentSummary } from "./PaymentSummary";
import { OrderSummary } from "./OrderSummary";

export function CheckOutPage({ cart,cartData }) {
  const [delivery, setDelivery] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const fetchCheckoutData = async () => {
    let response = await axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      setDelivery(response.data);
    response = await axios.get("/api/payment-summary")
      setPaymentSummary(response.data);
    }
    fetchCheckoutData(); 
  }, [cart]);

  return (
    <>
      <title>CheckOut</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img
                className="logo"
                src="data:image/jpeg;base64,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"
              />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} delivery={delivery} cartData={cartData}/>
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
