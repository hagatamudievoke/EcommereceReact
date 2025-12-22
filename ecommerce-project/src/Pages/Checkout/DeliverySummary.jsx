import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
export function DeliverySummary({delivery,cartItem}){
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
                            return (
                              <div className="delivery-option">
                                <input
                                  type="radio"
                                  checked={delivery.id === cartItem.deliveryOptionId}
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