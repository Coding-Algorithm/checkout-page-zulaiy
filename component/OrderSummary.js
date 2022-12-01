import React from "react";

const orderText = ({ key, value }) => {
  <div className="orderTextWrapper">
    <p>{key}</p>
    <p>{value}</p>
  </div>;
};

const OrderSummary = () => {
  return (
    <div className="orderSummary">
      <h2 className="orderTitle">Order Summary</h2>

      <orderText key="Subtotal" value="$119.32" />
      <orderText key="Duties & Tax" value="$90" />
      <orderText key="Delivery" value="$110" />

      <div className="orderTextWrapper">
        <p className="orderCat">Subtotal</p>
        <p className="orderPrice">$119.32</p>
      </div>
      <div className="orderTextWrapper">
        <p className="orderCat">Duties</p>
        <p className="orderPrice">$90</p>
      </div>
      <div className="orderTextWrapper">
        <p className="orderCat">Delivery</p>
        <p className="orderPrice">$110</p>
      </div>


      <div className="orderTotalWrapper">
        <p className="orderTotalCat">Delivery</p>
        <p className="orderTotalPrice">$110</p>
      </div>
    </div>
  );
};

export default OrderSummary;
