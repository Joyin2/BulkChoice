import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title="Home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, et? Sint quidem quia eveniet rem? Iure culpa nulla
                  itaque quos. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Facilis, esse.
                </p>
                <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link to="/shop">SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
