import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money";
export function DeliverySummary({delivery,cartItem,cartData}){
    return(
           <div className="delivery-options">
                          <div className="delivery-options-title">
                            Choose a delivery option:
                          </div>
                          {delivery.map((delivery) => {
                            let priceString = "FREE Shipping";
                            if (delivery.priceCents > 0) {
                              priceString = `${formatMoney(
                                delivery.priceCents
                              )}-shipping`;
                            }
                             const updateDeliveryOption =async() => {
                             await axios.put(`/api/cart-items/${cartItem.productId}`,{
                                deliveryOptionId: delivery.id
                              })
                              await cartData();
                            }
                            return (
                              <div  key={delivery.id} className="delivery-option" onClick={updateDeliveryOption}>
                                <input
                                  type="radio"
                                  checked={delivery.id === cartItem.deliveryOptionId}
                                  onChange = {() => {}}
                                  className="delivery-option-input"
                                  name={`delivery-option-${cartItem.productId}`}
                                />
                                <div>
                                  <div className="delivery-option-date">
                                    {dayjs(delivery.estimatedDeliveryTimeMs).format(
                                      "dddd, MMMM, D"
                                    )}
                                  </div>
                                  <div className="delivery-option-price">
                                    {priceString}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
        
    )

}