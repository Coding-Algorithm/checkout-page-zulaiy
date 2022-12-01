import React from "react";

const DeliverySection = ({ text, address, mail, number }) => {
  return (
    <div className="deliveryInfo">
      <p className="DeliveryText">{text}</p>

      <p className="DeliveryText">{address}</p>

      <p className="DeliveryText">{mail}</p>

      <p className="DeliveryText">{number}</p>
    </div>
  );
};

const Delivery = ({title = 'Delivery'}) => {
  return (
    <section className="delivery">
      <div className="deliveryTitleWrapper">
        <h2 className="deliveryTitle">{title}</h2>
        <p>edit</p>
      </div>

      <DeliverySection
        text="Paul Sandra"
        address="No, 13 obasesan street, ayomikun"
        mail="paul@gmail.com"
        number="08062147417"
      />
      <DeliverySection />
    </section>
  );
};

export default Delivery;
