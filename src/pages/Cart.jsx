import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [cartItemsData, setCartItemsData] = useState(cartItems[0].price);

  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  // console.log(cartItemsData);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added in the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} onDelete={deleteProduct} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">Rs. {totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Taxes and shipping will be calculated at checkout
              </p>
              <div>
                <button
                  
                  className="buy__btn w-100"
                >
                  <Link
                    to="/checkout" state={cartItemsData}
                  >
                    Checkout
                  </Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>Rs. {item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          className="ri-delete-bin-6-line"
          onClick={handleDelete}
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
