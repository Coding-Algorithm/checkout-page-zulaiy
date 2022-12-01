import React from "react";
import Header from "../../component/checkout/Header";
import Steps from "../../component/checkout/Steps";
import Delivery from "../../component/Delivery";
import OrderSummary from "../../component/OrderSummary";
import PaymentDetails from "../../component/PaymentDetails";
import PaymentOption from "../../component/PaymentOption";

const Checkout = () => {
  return (
    <div className="flex flex-col justify-center w-full mb-10 col">
      <Header />
      <Steps />

      <div className="flex flex-col md:flex-row md:px-[10%]">
        <div>
          <PaymentOption />
          <PaymentDetails />
          <Delivery title="Delivery" />
          <Delivery title="Shipping" />
          <Delivery title="Billing" />
        </div>

        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
