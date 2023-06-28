import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import useRazorpay from "react-razorpay";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";

const Checkout = ({ cartItemsData }) => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // console.log(cartItemsData);
  // const location = useLocation();
  // const cartItems = location;

  // useEffect(() => {
  //   console.log("Cart Items:", cartItems);
  // }, [cartItems]);

  const Razorpay = useRazorpay();

  const handlePayment = async (params) => {
    // const order = await createOrder(params); //  Create order on your backend

    const options = {
      key: "rzp_test_oZg0sSDzHNvAU7", // Enter the Key ID generated from the Dashboard
      amount: "20000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "BULK CHOICE",
      description: "Test Transaction",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <Container className="mt-5">
        <Row>
          <Col lg="8">
            <h6 className="mb-4 fw-bold">Billing Information</h6>
            <Form className="billing__form">
              <FormGroup className="form__group">
                <input type="text" placeholder="Enter your name" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="email" placeholder="Enter your email" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="number" placeholder="Phone number" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Street address" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="City" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Postal code" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Country" />
              </FormGroup>
            </Form>
          </Col>
          <Col lg="4">
            <div className="checkout__cart">
              <h6>
                Total Qty: <span>{totalQty} items</span>
              </h6>
              <h6>
                Subtotal: <span>Rs. {totalAmount}</span>
              </h6>
              <h6>
                <span>
                  Shipping: <br />
                  free shipping
                </span>
                <span>Rs. 0</span>
              </h6>
              <h6>Free shipping</h6>
              <h4>
                Total Cost: <span>Rs. {totalAmount}</span>
              </h4>
              <button onClick={handlePayment} className="auth__btn w-100">
                Place an order
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Checkout;
