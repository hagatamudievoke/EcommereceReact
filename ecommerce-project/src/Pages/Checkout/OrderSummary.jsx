import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { DeliverySummary } from "./DeliverySummary";
export function OrderSummary({ cart, delivery, cartData}) {
  return (
    <div className="order-summary">
      {delivery.length > 0 &&
        cart.map((cartItem) => {
          const deliveryOption = delivery.find((delivery) => {
            return delivery.id === cartItem.deliveryOptionId;
          });
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM, D"
                )}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
                    </span>
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>
                    <span className="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>
                <DeliverySummary cartItem={cartItem} delivery={delivery} cartData={cartData}/>

              </div>
            </div>
          );
        })}
    </div>
  );
}
