import React from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              {/* <img src={logo} alt="" /> */}
              <h1 className="text-white">Bulk Choice</h1>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
              distinctio enim? Fugit asperiores distinctio molestias maxime
              perferendis minus ipsam ipsum.
            </p>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="#" className="text-decoration-none footer-item">
                    Mobile Phones
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="#" className="text-decoration-none footer-item">
                    Modern Sofa
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="#" className="text-decoration-none footer-item">
                    Arm Chair
                  </Link>
                  1
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="#" className="text-decoration-none footer-item">
                    Smart Watches
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="/shop" className="text-decoration-none footer-item">
                    Shop
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="/cart" className="text-decoration-none footer-item">
                    Cart
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 ">
                  <Link
                    to="/login"
                    className="text-decoration-none footer-item"
                  >
                    Login
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="#" className="text-decoration-none footer-item">
                    Privacy Policy
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="mb-3 footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex gap-1 ">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>788004 Silchar, Assam, India</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex gap-1 ">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+91 6003351943</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex gap-1 ">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>contact@bulkchoice.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
          <p className="footer__copyright">Copyright {year} developed by Team03. All rights reserved.
          </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
