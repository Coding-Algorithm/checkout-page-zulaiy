import React from "react";
import { BsCheck2 } from "react-icons/bs";

const EachStep = ({ position, name }) => {
  return (
    <div className="steps">
      <div className="stepsMarkIconCover">
        <BsCheck2 color="white" />
      </div>

      <aside>
        <p className="stepTopText">{position} STEP</p>
        <p className="stepBottomText">{name}</p>
      </aside>
    </div>
  );
};

const Steps = () => {
  return (
    <section className="stepsCover">

      <EachStep name="Information" position="FIRST" />
      <EachStep name="Delivery" position="SECOND" />
      <EachStep name="Billing" position="THIRD" />
      <EachStep name="Payment" position="FOURTH" />

      
    </section>
  );
};

export default Steps;
