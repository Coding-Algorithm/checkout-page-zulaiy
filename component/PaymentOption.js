import React from "react";

const PaymentCard = () => {
  return (
    <div className="paymentCard">
      <div className="flex">
        <div className="paymentCardText">m</div>

        <p className="paymentCardText">
          Debit or Credit Card
        </p>
      </div>

      <div className="paymentCardText">check</div>
    </div>
  );
};

const PaymentOption = () => {
  return (
    <section className="paymentOption">
      <h2 className="paymentTitle">Choose Payment</h2>

      <PaymentCard />
      <PaymentCard />
    </section>
  );
};

export default PaymentOption;
