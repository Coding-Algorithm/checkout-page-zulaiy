import React from "react";
import { Formik } from "formik";

const PaymentDetailsOption = () => {
  return (
    <div className="PaymentDetailsOption">
      <div className="flex">
        <div className="PaymentDetailsText">m</div>

        <p className="PaymentDetailsText">Debit or Credit</p>
      </div>

      <div className="PaymentDetailsText">check</div>
    </div>
  );
};

const PaymentDetails = () => {
  return (
    <section className="paymentDetails">
      <h2 className="paymentTitle">Payment Detail</h2>

      <Formik
        initialValues={{ name: "", cardNo: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="formWrapper" onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <label className="labelTitle">Name</label>
              <input
                className="inputStyle"
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <br />
              {errors.name && touched.name && (
                <p className="errorLabel"> {errors.name} </p>
              )}
            </div>

            <label className="labelTitle">Card Number</label>
            <input
              className="inputStyle"
              type="cardNo"
              name="cardNo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cardNo}
            />
            <br />
            {errors.cardNo && touched.cardNo && <p> {errors.cardNo} </p>}
            

            <div className="inputWrapperInner">
            <div className="inputWrapperInnerInner">
              <label className="labelTitle">MM/YY</label>
              <input
                className="bottomInputStyle"
                type="mm"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mm}
              />
              <br />
              {errors.mm && touched.mm && (
                <p className="errorLabel"> {errors.mm} </p>
              )}
            </div>

            <div className="inputWrapperStyle">
              <label className="labelTitle">CVV</label>
              <input
                className="bottomInputStyle"
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cvv}
              />
              <br />
              {errors.cvv && touched.cvv && (
                <p className="errorLabel"> {errors.cvv} </p>
              )}
            </div>
            </div>
            
            
            <p className="submitButton">
              Save as default
            </p>
          </form>
        )}
      </Formik>

    </section>
  );
};

export default PaymentDetails;
